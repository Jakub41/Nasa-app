/* eslint-disable no-await-in-loop */
/* eslint-disable import/prefer-default-export */
import { getRoverManifest, getRoverPhotosBySol } from '../../../../API';
import * as PhotoConst from './PhotosConst';

export function hasMorePhotosAvailableToFetch(camera, roverName) {
  return PhotoConst.nextIndexToStartSearch[roverName][camera] >= 0;
}

export function savePhotosManifest(photosManifest) {
  const manifestData = photosManifest.photo_manifest;
  const roverName = manifestData.name;
  PhotoConst.photosInfo[roverName] = manifestData.photos;
}

async function checkVariablesBeforeFetching(cameraToFetch, roverName) {
  const hasPhotosManifestInMemory = Boolean(PhotoConst.photosInfo[roverName].length);
  if (!hasPhotosManifestInMemory) {
    const manifest = await getRoverManifest(roverName);
    savePhotosManifest(manifest);
  }
  const isNextSolToStartSearchInitialized = Boolean(
    PhotoConst.nextIndexToStartSearch[roverName][cameraToFetch]
  );
  if (!isNextSolToStartSearchInitialized) {
    PhotoConst.nextIndexToStartSearch[roverName][cameraToFetch] =
      PhotoConst.photosInfo[roverName].length - 1;
  }
}

function hasToFetchMorePhotos(indexOfManifest, numberOfFetchedPhotos, numberOfPhotosToFetch) {
  const hasEnoughPhotosForCurrentPage = numberOfFetchedPhotos >= numberOfPhotosToFetch;
  const hasReachedEndOfApisDatabase = indexOfManifest < 0;
  return !hasEnoughPhotosForCurrentPage && !hasReachedEndOfApisDatabase;
}

function hasNextPageOfResults(lastNumberOfFetchedPhotos) {
  return lastNumberOfFetchedPhotos === 25;
}

export async function getMostRecentCustomNumberOfPhotosByCamera(
  cameraToFetch,
  numberOfPhotosToFetch,
  roverName
) {
  await checkVariablesBeforeFetching(cameraToFetch, roverName);

  let accumulatedFetchedPhotos = [];
  let indexOfManifest = PhotoConst.nextIndexToStartSearch[roverName][cameraToFetch];

  while (
    hasToFetchMorePhotos(indexOfManifest, accumulatedFetchedPhotos.length, numberOfPhotosToFetch)
  ) {
    const camerasOfCurrentSol = PhotoConst.photosInfo[roverName][indexOfManifest].cameras;

    if (camerasOfCurrentSol.includes(cameraToFetch)) {
      const currentSol = PhotoConst.photosInfo[roverName][indexOfManifest].sol;

      let pageNumber = 1;

      if (PhotoConst.hasStoppedInPageNumber[roverName][cameraToFetch]) {
        pageNumber = PhotoConst.nextPageNumberToStartSearch[roverName][cameraToFetch];
      }

      const result = await getRoverPhotosBySol(
        roverName.toLowerCase(),
        currentSol,
        cameraToFetch,
        pageNumber
      );

      if (!result.success) throw new Error('Request of new set of photos failed.');

      // Orders the array with the newest photos first.
      const lastFetchedPhotos = result.photos.reverse();

      accumulatedFetchedPhotos = [...accumulatedFetchedPhotos, ...lastFetchedPhotos];

      if (hasNextPageOfResults(lastFetchedPhotos.length)) {
        PhotoConst.hasStoppedInPageNumber[roverName][cameraToFetch] = true;
        PhotoConst.nextPageNumberToStartSearch[roverName][cameraToFetch] = pageNumber + 1;
      } else {
        PhotoConst.hasStoppedInPageNumber[roverName][cameraToFetch] = false;
        indexOfManifest -= 1;
        PhotoConst.nextIndexToStartSearch[roverName][cameraToFetch] = indexOfManifest;
      }
    } else {
      indexOfManifest -= 1;
    }
  }

  return accumulatedFetchedPhotos;
}
