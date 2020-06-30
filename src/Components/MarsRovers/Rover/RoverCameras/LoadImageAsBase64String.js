const crossOriginByPass = 'https://cors-anywhere.herokuapp.com/';

async function loadImg(src) {
  const loader = new Promise(function imageLoader(resolve, reject) {
    const img = document.createElement('img');
    img.onload = function returnLoadedImage() {
      resolve(img);
    };
    img.onerror = function imageLoaderErrorHandler() {
      reject(new Error('Error while loading image.'));
    };
    img.crossOrigin = 'anonymous';
    img.src = crossOriginByPass + src;
  });
  const loadedImage = await loader;
  return loadedImage;
}

function convertImgToBase64String(image) {
  const canvas = document.createElement('canvas');
  canvas.width = image.width;
  canvas.height = image.height;
  canvas.getContext('2d').drawImage(image, 0, 0, image.width, image.height);
  const imageAsBase64String = canvas.toDataURL();
  return imageAsBase64String;
}

export default async function loadImageAsBase64String(src) {
  const loadedImage = await loadImg(src);
  const imageSrcInBase64 = convertImgToBase64String(loadedImage);
  return imageSrcInBase64;
}
