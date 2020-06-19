import React, { useEffect, useState } from 'react';
import Pagination from 'react-js-pagination';
import { Global } from '@emotion/core';
import { v4 as uuidv4 } from 'uuid';
import { getMostRecentCustomNumberOfPhotosByCamera } from './PhotosDataFetch';
import updatePaginationBar from './PhotoPagination';
import { numberOfPhotosPerPage, photosInMemory, numberOfPagesInPagination } from './PhotosConst';
import {
  WrapperAlignedToCenter,
  PaginationStyles,
  RoverPhotosGrid,
  RoverPhotoItem,
} from './styles';
import LoadingSpinner from './LoadingSpinner';

let lastCameraShown;
let lastRoverNameShown;

export default function RoverPhotos({ camera, roverName, setWholePageIsLoading }) {
  const [activePageNumber, setActivePageNumber] = useState(1);
  const [isFetchingPhotos, setIsFetchingPhotos] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setIsFetchingPhotos(true);
    setHasError(false);
    (async () => {
      try {
        const hasChangedPhotoGallery =
          lastCameraShown !== camera || lastRoverNameShown !== roverName;
        if (activePageNumber !== 1 && hasChangedPhotoGallery) {
          setActivePageNumber(1);
          return;
        }
        const numberOfPhotosToFetch =
          activePageNumber * numberOfPhotosPerPage -
          (photosInMemory[roverName][camera] || []).length;
        if (numberOfPhotosToFetch > 0) {
          const newSetOfPhotos = await getMostRecentCustomNumberOfPhotosByCamera(
            camera,
            numberOfPhotosToFetch,
            roverName
          );
          photosInMemory[roverName][camera] = [
            ...(photosInMemory[roverName][camera] || []),
            ...newSetOfPhotos,
          ];
        }
        updatePaginationBar(camera, roverName);
        setWholePageIsLoading(false);
        setIsFetchingPhotos(false);
        lastCameraShown = camera;
        lastRoverNameShown = roverName;
      } catch (error) {
        setHasError(true);
        setWholePageIsLoading(false);
        setIsFetchingPhotos(false);
      }
    })();
  }, [camera, roverName, setWholePageIsLoading, activePageNumber]);

  const totalItemsCount = numberOfPagesInPagination[roverName][camera] * numberOfPhotosPerPage;

  const firstPhotoIndexToDisplay = (activePageNumber - 1) * numberOfPhotosPerPage;
  const lastPhotoIndexToDisplay = activePageNumber * numberOfPhotosPerPage;
  const photosToDisplayInCurrentPage = (photosInMemory[roverName][camera] || []).slice(
    firstPhotoIndexToDisplay,
    lastPhotoIndexToDisplay
  );
  const listOfRoverPhotoItemsToDisplay = photosToDisplayInCurrentPage.map(
    function makePhotoItemFromPhotoData(photo) {
      return (
        <RoverPhotoItem
          key={uuidv4()}
          src={photo.img_src}
          alt={
            `Taken by rover ${roverName} from camera ${camera}` +
            ` on earth date ${photo.earth_date}, which is the` +
            ` martian sol number ${photo.sol} relative to the rover.`
          }
        />
      );
    }
  );

  return (
    <div>
      <Global styles={PaginationStyles} />
      <WrapperAlignedToCenter>
        <Pagination
          activePage={activePageNumber}
          itemsCountPerPage={numberOfPhotosPerPage}
          totalItemsCount={totalItemsCount}
          onChange={setActivePageNumber}
          hideFirstLastPages
        />
      </WrapperAlignedToCenter>
      <RoverPhotosGrid>
        {isFetchingPhotos ? <LoadingSpinner /> : null}
        {hasError ? (
          <WrapperAlignedToCenter>
            <h3>Error while fetching photos.</h3>
          </WrapperAlignedToCenter>
        ) : null}
        {!isFetchingPhotos && !hasError ? listOfRoverPhotoItemsToDisplay : null}
      </RoverPhotosGrid>
    </div>
  );
}
