import {
    startButton,
    minutesInputValue,
    secondsInputValue,
} from './getterFunctions.js';

const checkStartButtonText = () => {
    const isButtonInStartState = startButton.innerHTML === 'start';
    if (isButtonInStartState) {
        return true;
    } else {
        return false;
    }
};

const validateTimeInput = () => {
    if (
        checkInputValueRange(minutesInputValue, secondsInputValue) &&
        checkIfValueEmpty(minutesInputValue, secondsInputValue) &&
        checkIfDecimalValue(minutesInputValue, secondsInputValue)
    ) {
        return true;
    } else {
        return false;
    }
};

const checkInputValueRange = (minutes, seconds) => {
    if (minutes <= 60 && minutes >= 0 && seconds <= 60 && seconds >= 0) {
        return true;
    }
    return false;
};

const checkIfValueEmpty = (minutes, seconds) => {
    if (minutes !== '' && seconds !== '') {
        return true;
    }
    return false;
};

const checkIfDecimalValue = (minutes, seconds) => {
    if (minutes.indexOf('.') === -1 && seconds.indexOf('.') === -1) {
        return true;
    }
    return false;
};

export {checkStartButtonText, validateTimeInput};
