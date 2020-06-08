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
