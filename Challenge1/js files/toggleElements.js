import {startButton, minutesInput, secondsInput} from './getterFunctions.js';
import {checkStartButtonText} from './validateItems.js';

const toggleStartButtonText = () => {
    if (checkStartButtonText()) {
        startButton.innerHTML = 'stop';
    } else {
        startButton.innerHTML = 'start';
    }
};

const enableTimeInputField = () => {
    minutesInput.disabled = false;
    secondsInput.disabled = false;
};

const disableTimeInputField = () => {
    minutesInput.disabled = true;
    secondsInput.disabled = true;
};

export {toggleStartButtonText, enableTimeInputField, disableTimeInputField};
