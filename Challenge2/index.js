import {isCartEmpty, onAddButtonClick} from './utilities.js';
const addButton = document.querySelectorAll('.add');

isCartEmpty();
addButton.forEach((button) => {
    button.addEventListener('click', onAddButtonClick);
});
