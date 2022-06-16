// import { jiggleKey, selectRandomKey, keyIsValid, removeJiggle } from "./utilities.js";

const keys = document.querySelectorAll(".key");

let keyPressed;
let keyCurrentlyJiggling;
let numberOfKeys = keys.length;


const crossValidateTheKeyPressed = () => {
  if (keyPressed === keyCurrentlyJiggling) {
    console.log("true");
    removeJiggle();
    randomKeySelection();
  }
};

const getKeyPressed = (event) => {
  keyPressed = event.key.toUpperCase();
  console.log(keyPressed);
  crossValidateTheKeyPressed();
};

document.addEventListener("keypress", getKeyPressed);

const jiggleKey = (keyElement) => { 
  keyElement.classList.add("jiggle");
};

const generateRandomNumber = (value) => {
  return Math.floor(Math.random() * value);
};

const selectRandomKey = (elementIndexValue) => {
  return keys[elementIndexValue];
};

const keyIsValid = (value) => {
  let dataKeyValue = keys[value].getAttribute("data-key");
  if (
    dataKeyValue === "TAB" ||
    dataKeyValue === "CAPSLOCK" ||
    dataKeyValue === "TAB" ||
    dataKeyValue === "ENTER" ||
    dataKeyValue === "BACKSPACE" ||
    dataKeyValue === "SHIFT"
  ) {
    return false;
  }
  return true;
};

const randomKeySelection = () => {
  let randomNumber = generateRandomNumber(numberOfKeys);
  if (keyIsValid(randomNumber) === false) {
    randomKeySelection();
  } else {
    let selectedKeyElement = selectRandomKey(randomNumber);
    jiggleKey(selectedKeyElement);
    keyCurrentlyJiggling = selectedKeyElement.getAttribute("data-key");
  }
};

const removeJiggle = () => {
  document.querySelector(".jiggle").classList.remove("jiggle");
};

randomKeySelection();
