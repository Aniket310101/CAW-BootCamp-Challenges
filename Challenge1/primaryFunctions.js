import {timer} from './index.js';
import {toggleStartButtonText, enableTimeInputField} from './toggleElements.js';
import {chageRingColorToRed} from './changeElements.js';
import {checkStartButtonText} from './validateItems.js';

const stopTimer = () => {
  clearInterval(timer);
};

const timeIsUp = () => {
  clearInterval(timer);
  chageRingColorToRed();
  setTimeout(() => {
    alert('Time is Up!');
  }, 1);
  toggleStartButtonText();
};

const onClickSettingsButton = () => {
  if (checkStartButtonText()) {
    enableTimeInputField();
  } else {
    alert('Stop the Timer First!');
  }
};

export {stopTimer, timeIsUp, onClickSettingsButton};
