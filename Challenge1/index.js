import {
    checkStartButtonText,
    validateTimeInput,
} from './js files/validateItems.js';
import {chageRingColorToGreen} from './js files/changeElements.js';
import {
    startButton,
    settingsButton,
    setCurrentTimeValueToTimeInputField,
    startTimer,
} from './js files/getterFunctions.js';
import {
    toggleStartButtonText,
    disableTimeInputField,
} from './js files/toggleElements.js';
import {stopTimer, onClickSettingsButton} from './js files/primaryFunctions.js';

startButton.addEventListener('click', () => {
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
