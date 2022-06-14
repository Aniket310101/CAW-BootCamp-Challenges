import {timer} from "./index.js";
import {toggleStartButtonText, enableTimeInputField} from "./toggleElements.js";
import {chageRingColorToRed} from "./changeElements.js";
import {checkStartButtonText} from "./validateItems.js";



function stopTimer(){
    clearInterval(timer);
}


function timeIsUp(){
    clearInterval(timer);
    chageRingColorToRed();
    setTimeout(function(){alert('Time is Up!');}, 1);
    toggleStartButtonText();
}

function onClickSettingsButton(){
    if(checkStartButtonText()){
        enableTimeInputField();
    }
    else{
        alert("Stop the Timer First!");
    }
    
}

export {stopTimer, timeIsUp, onClickSettingsButton};