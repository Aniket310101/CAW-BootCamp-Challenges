import {checkStartButtonText, validateTimeInput} from './validateItems.js';
import {chageRingColorToGreen} from './changeElements.js';
import {
  toggleStartButtonText,
  disableTimeInputField,
} from './toggleElements.js';
import {
  stopTimer,
  timeIsUp,
  onClickSettingsButton,
} from './primaryFunctions.js';
import {addZeroToSingleDigitValue} from './modifyTimeInput.js';

const startButton = document.querySelector('.start');
const minutesInput = document.querySelector('.minutes-text');
const secondsInput = document.querySelector('.seconds-text');
const settingsButton = document.querySelector('.settings');
let minutesInputValue = minutesInput.value;
let secondsInputValue = secondsInput.value;
let timer = 0;

startButton.addEventListener('click', function () {
  timerInitialized();
});

settingsButton.addEventListener('click', onClickSettingsButton);

const timerInitialized = () => {
  if (checkStartButtonText()) {
    setCurrentTimeValueToTimeInputField();
    // test();
    if (validateTimeInput()) {
      disableTimeInputField();
      chageRingColorToGreen();
      startTimer();
      toggleStartButtonText();
    } else {
      alert('Time Input is not Valid!');
    }
  } else {
    stopTimer();
    toggleStartButtonText();
  }
};

const startTimer = () => {
  minutesInputValue = addZeroToSingleDigitValue(minutesInputValue);
  minutesInput.value = minutesInputValue;
  secondsInputValue = addZeroToSingleDigitValue(secondsInputValue);
  secondsInput.value = secondsInputValue;

  timer = setInterval(function () {
    if (minutesInputValue == 0 && secondsInputValue == 0) {
      timeIsUp();
    } else if (secondsInputValue === '00') {
      secondsInputValue = '59';
      minutesInputValue = minutesInputValue - 1;
      minutesInputValue = addZeroToSingleDigitValue(minutesInputValue);
      minutesInput.value = minutesInputValue;
    } else {
      secondsInputValue = parseInt(secondsInputValue) - 1;
    }

    secondsInputValue = addZeroToSingleDigitValue(secondsInputValue);
    secondsInput.value = secondsInputValue;
  }, 1000);
};

const setCurrentTimeValueToTimeInputField = () => {
  minutesInputValue = minutesInput.value;
  secondsInputValue = secondsInput.value;
};

export {
  startButton,
  minutesInput,
  secondsInput,
  settingsButton,
  minutesInputValue,
  secondsInputValue,
  timer,
};
