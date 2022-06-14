import {startButton, minutesInputValue, secondsInputValue} from "./index.js"

function checkStartButtonText(){
    if(startButton.innerHTML === 'start'){
        return true;
    }

    else if(startButton.innerHTML === 'stop'){
        return false;
    }    
}


function validateTimeInput(){
    if(minutesInputValue <= 60 && minutesInputValue >= 0 && 
        secondsInputValue <= 60 && secondsInputValue >= 0 && 
        (minutesInputValue !== "") && (secondsInputValue !== "") && 
        minutesInputValue.indexOf('.') === -1 && secondsInputValue.indexOf('.') === -1){

        return true;
    }

    else{
        return false;
    }
}

export {checkStartButtonText, validateTimeInput};

