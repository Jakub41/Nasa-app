import React, { useEffect, useState } from 'react';
import Pagination from 'react-js-pagination';
import { Global } from '@emotion/core';
import { getMostRecentCustomNumberOfPhotosByCamera } from './PhotosDataFetch';
import updatePaginationBar from './PhotoPagination';
import { numberOfPhotosPerPage, photosInMemory, numberOfPagesInPagination } from './PhotosConst';
import { WrapperAlignedToCenter, PaginationStyles, RoverPhotosGrid } from './styles';
import LoadingSpinner from './LoadingSpinner';
import ListOfPhotosByPage from './ListOfPhotosByPage';

let lastCameraShown;
let lastRoverNameShown;

export default function RoverPhotos({ camera, roverName, setWholePageIsLoading }) {
  const [activePageNumber, setActivePageNumber] = useState(1);
  const [isFetchingPhotos, setIsFetchingPhotos] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isComponentMounted, setIsComponentMounted] = useState(false);

  useEffect(() => {
    (() => {
      setIsComponentMounted(true);
      setIsFetchingPhotos(true);
      setHasError(false);
      (async () => {
        try {
          const hasChangedPhotoGallery =
            lastCameraShown !== camera || lastRoverNameShown !== roverName;
          if (activePageNumber !== 1 && hasChangedPhotoGallery) {
            if (isComponentMounted) {
              setActivePageNumber(1);
            }
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

          lastCameraShown = camera;
          lastRoverNameShown = roverName;

          setWholePageIsLoading(false);
          setIsFetchingPhotos(false);
        } catch {
          if (isComponentMounted) {
            setHasError(true);
          }
        } finally {
          if (isComponentMounted) {
            setWholePageIsLoading(false);
            setIsFetchingPhotos(false);
          }
        }
      })();

      return function onComponentUnmount() {
        setIsComponentMounted(false);
      };
    })();
  }, [camera, roverName, setWholePageIsLoading, activePageNumber, isComponentMounted]);

  const totalItemsCount = numberOfPagesInPagination[roverName][camera] * numberOfPhotosPerPage;

  const listOfRoverPhotoItemsToDisplay = ListOfPhotosByPage(
    activePageNumber,
    camera,
    roverName,
    numberOfPhotosPerPage,
    photosInMemory
  );

  return (
    <>
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
    </>
  );
}
