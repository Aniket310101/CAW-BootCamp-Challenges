import {timeIsUp} from './primaryFunctions.js';
import {addZeroToSingleDigitValue} from './modifyTimeInput.js';

export const startButton = document.querySelector('.start');
export const minutesInput = document.querySelector('.minutes-text');
export const secondsInput = document.querySelector('.seconds-text');
export const settingsButton = document.querySelector('.settings');
export let minutesInputValue = minutesInput.value;
export let secondsInputValue = secondsInput.value;
export let timer = 0;

export const setCurrentTimeValueToTimeInputField = () => {
    minutesInputValue = minutesInput.value;
    secondsInputValue = secondsInput.value;
};

export const startTimer = () => {
    minutesInputValue = addZeroToSingleDigitValue(minutesInputValue);
    minutesInput.value = minutesInputValue;
    secondsInputValue = addZeroToSingleDigitValue(secondsInputValue);
    secondsInput.value = secondsInputValue;

    timer = setInterval(() => {
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
