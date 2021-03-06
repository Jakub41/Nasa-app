import React, { useEffect, useState } from 'react';
import { ImageWithHoverToFitGrid, RoverPhotosGrid } from './styles';
import PulsingThreeDots from './PulsingThreeDots';
import { hasPhotoInDB, readPhotoFromDB, savePhotoToDB } from './PhotosDB';
import loadImageAsBase64String from './LoadImageAsBase64String';

export default function PhotoItem({ alt, photoId, src }) {
  const [imageSrc, setImageSrc] = useState('');
  const [isLoadingPhotoData, setIsLoadingPhotoData] = useState(true);
  const [isComponentMounted, setIsComponentMounted] = useState(true);

  useEffect(
    function onComponentRender() {
      let isCancelled = true;
      setIsComponentMounted(true);
      setIsLoadingPhotoData(true);
      (async function synchronizeWithDatabase() {
        try {
          const hasCurrentPhotoInDB = await hasPhotoInDB(RoverPhotosGrid);
          if (hasCurrentPhotoInDB) {
            const photoFromDB = await readPhotoFromDB(photoId);
            if (isComponentMounted && isCancelled) {
              setImageSrc(photoFromDB.srcInBase64);
            }
          } else {
            const imageSrcInBase64 = await loadImageAsBase64String(src);
            if (isComponentMounted && isCancelled) {
              setImageSrc(imageSrcInBase64);
            }
            const photo = {
              id: photoId,
              srcInBase64: imageSrcInBase64,
            };
            await savePhotoToDB(photo);
          }
        } catch {
          if (isComponentMounted && isCancelled) {
            setImageSrc(src);
          }
        }
      })();

      return function onComponentUnmount() {
        setIsComponentMounted(false);
        isCancelled = false;
      };
    },
    [photoId, src, isComponentMounted]
  );

  return (
    <>
      {isLoadingPhotoData ? <PulsingThreeDots /> : null}
      <ImageWithHoverToFitGrid
        src={imageSrc}
        alt={alt}
        style={isLoadingPhotoData ? { display: 'none' } : null}
        onLoad={() => {
          if (isComponentMounted) setIsLoadingPhotoData(false);
        }}
      />
    </>
  );
}
