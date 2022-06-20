const keys = document.querySelectorAll('.key');

let keyPressed;
let keyCurrentlyJiggling;
const numberOfKeys = keys.length;

const crossValidateTheKeyPressed = () => {
  if (keyPressed === keyCurrentlyJiggling) {
    removeJiggle();
    randomKeySelection();
  }
};

const getKeyPressed = (event) => {
  keyPressed = event.key.toUpperCase();
  crossValidateTheKeyPressed();
};

document.addEventListener('keypress', getKeyPressed);

const jiggleKey = (keyElement) => keyElement.classList.add('jiggle');

const generateRandomNumber = (value) => Math.floor(Math.random() * value);

const selectRandomKey = (elementIndexValue) => keys[elementIndexValue];

const isDataKeyValueValid = (keyValue) => {
  if (
    keyValue === 'TAB' ||
    keyValue === 'CAPSLOCK' ||
    keyValue === 'ENTER' ||
    keyValue === 'BACKSPACE' ||
    keyValue === 'SHIFT'
  ) {
    return false;
  }
  return true;
};

const keyIsValid = (value) => {
  const dataKeyValue = keys[value].getAttribute('data-key');
  return isDataKeyValueValid(dataKeyValue);
};

const randomKeySelection = () => {
  const randomNumber = generateRandomNumber(numberOfKeys);
  if (!keyIsValid(randomNumber)) {
    randomKeySelection();
  } else {
    const selectedKeyElement = selectRandomKey(randomNumber);
    jiggleKey(selectedKeyElement);
    keyCurrentlyJiggling = selectedKeyElement.getAttribute('data-key');
  }
};

const removeJiggle = () =>
  document.querySelector('.jiggle').classList.remove('jiggle');

randomKeySelection();
