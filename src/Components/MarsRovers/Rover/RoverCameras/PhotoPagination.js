import { hasMorePhotosAvailableToFetch } from './PhotosDataFetch';
import { photosInMemory, numberOfPhotosPerPage, numberOfPagesInPagination } from './PhotosConst';

const updatePaginationBar = (camera, roverName) => {
  const photosInMemoryForThisCameraAndRover = photosInMemory[roverName][camera] || [];
  let calculatedNumberOfPages;
  if (hasMorePhotosAvailableToFetch(camera, roverName)) {
    calculatedNumberOfPages = Math.max(
      5,
      Math.floor(photosInMemoryForThisCameraAndRover.length / numberOfPhotosPerPage) + 1
    );
  } else {
    calculatedNumberOfPages = Math.ceil(
      photosInMemoryForThisCameraAndRover.length / numberOfPhotosPerPage
    );
  }
  numberOfPagesInPagination[roverName][camera] = calculatedNumberOfPages;
};

export default updatePaginationBar;
