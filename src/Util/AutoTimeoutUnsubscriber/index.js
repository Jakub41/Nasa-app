export default function createNewInstanceOfAutoTimeoutUnsubscribe() {
  let timeoutIds = [];

  function addNewTimeout(newFunctionToTimeout, delayDuration) {
    const currentTimeoutId = setTimeout(newFunctionToTimeout, delayDuration);
    timeoutIds.push(currentTimeoutId);
  }

  function clearAllTimeouts() {
    timeoutIds.forEach((timeoutId) => clearTimeout(timeoutId));
    timeoutIds = [];
  }

  return function autoTimeoutUnsubscribe(functionToTimeout, delayDuration) {
    if (functionToTimeout !== undefined) {
      addNewTimeout(functionToTimeout, delayDuration);
    } else {
      clearAllTimeouts();
    }
  };
}

export async function PromiseWithTimeout(promises, timeout) {
  let promise = promises;
  if (promises instanceof Array)
    promise = Promise.allSettled(promises).then((result) =>
      result.map((settledObject) => settledObject.value)
    );
  return Promise.race([promise, throwTimeout(timeout)]);
}

export const throwTimeout = (msec, message = 'timeout') => reject(msec, message);

export const reject = (msec, retVal) => new Promise((_, r) => setTimeout(r, msec, retVal));
export const resolve = (msec, retVal) => new Promise((r) => setTimeout(r, msec, retVal));
