import {startButton, minutesInput, secondsInput} from "./index.js";
import {checkStartButtonText} from "./validateItems.js";

function toggleStartButtonText(){
    if(checkStartButtonText()){
        startButton.innerHTML = 'stop';
    }
    else{
        startButton.innerHTML = 'start';
    }
}


function enableTimeInputField(){
    minutesInput.disabled = false;
    secondsInput.disabled = false;
}


function disableTimeInputField(){
    minutesInput.disabled = true;
    secondsInput.disabled = true;
}

export {toggleStartButtonText, enableTimeInputField, disableTimeInputField};