import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import PhotoItem from './PhotoItem';

export default function ListOfPhotosByPage(
  activePageNumber,
  camera,
  roverName,
  numberOfPhotosPerPage,
  photosInMemory
) {
  const firstPhotoIndexToDisplay = (activePageNumber - 1) * numberOfPhotosPerPage;
  const lastPhotoIndexToDisplay = activePageNumber * numberOfPhotosPerPage;

  const photosToDisplayInCurrentPage = (photosInMemory[roverName][camera] || []).slice(
    firstPhotoIndexToDisplay,
    lastPhotoIndexToDisplay
  );

  const listOfRoverPhotoItemsToDisplay = photosToDisplayInCurrentPage.map(
    function makePhotoItemFromPhotoData(photo) {
      return (
        <PhotoItem
          key={uuidv4()}
          photoId={photo.id}
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

  return listOfRoverPhotoItemsToDisplay;
}
