let db;
const dbName = 'marsRoversPhotos';
const dbVersion = 1;

(function openIndexedDB() {
  const openRequest = indexedDB.open(dbName, dbVersion);

  openRequest.onsuccess = function openDBSuccessHandler() {
    db = openRequest.result;

    db.onversionchange = function commonVersionChangeHandler() {
      db.close();
      throw new Error('A new version of indexedDB is available, please reload the page.');
    };

    db.onerror = function databaseErrorHandler() {
      throw new Error('Error on indexedDB.');
    };
  };

  openRequest.onupgradeneeded = function openDBUpgradeHandler(event) {
    const dbToUpdgrade = event.target.result;

    dbToUpdgrade.createObjectStore('photos', { keyPath: 'id' });
  };

  openRequest.onerror = function openDBErrorHandler() {
    throw new Error('Error on open operation of indexedDB.');
  };

  openRequest.onblocked = function openDBBlockHandler() {
    throw new Error('Please close all other tabs of this website.');
  };
})();

export async function savePhotoToDB(photo) {
  const saveOperation = new Promise(function addPhotoToDB(resolve, reject) {
    const transaction = db.transaction(['photos'], 'readwrite');

    transaction.onerror = function writeTransactionErrorHandler() {
      reject(new Error('Error on save transaction of indexedDB.'));
    };

    const saveRequest = transaction.objectStore('photos').add(photo);

    saveRequest.onsuccess = function saveSuccessHandler() {
      resolve(saveRequest.result);
    };

    saveRequest.onerror = function saveErrorHandler() {
      reject(new Error('Error on save request of indexedDB.'));
    };
  });
  const result = await saveOperation;

  return result;
}

export async function readPhotoFromDB(photoId) {
  const search = new Promise(function retrieveRecord(resolve, reject) {
    const transaction = db.transaction(['photos'], 'readonly');

    transaction.onerror = function readTransactionErrorHandler() {
      reject(new Error('Error on read transaction of indexedDB.'));
    };

    const readRequest = transaction.objectStore('photos').get(photoId);

    readRequest.onerror = function readErrorHandler() {
      reject(new Error('Error on read request of indexedDB.'));
    };

    readRequest.onsuccess = function readSuccessHandler() {
      resolve(readRequest.result);
    };
  });
  const photo = await search;

  return photo;
}

export async function hasPhotoInDB(photoId) {
  const search = new Promise(function countKeyInDB(resolve, reject) {
    const transaction = db.transaction(['photos'], 'readonly');

    transaction.onerror = function countTransactionErrorHandler() {
      reject(new Error('Error on count transaction.'));
    };

    const countRequest = transaction.objectStore('photos').count(photoId);

    countRequest.onsuccess = function countReadRequestSuccessHandler() {
      resolve(countRequest.result);
    };

    countRequest.onerror = function countReadRequestErrorHandler() {
      reject(new Error('Error on count request.'));
    };
  });
  const count = await search;

  return count;
}
