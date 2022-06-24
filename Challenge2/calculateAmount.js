import {subTotalElement, taxElement, totalAmountElement} from './utilities.js';

export const addToSubtotal = (price) => {
    const subTotalAmount = parseFloat(subTotalElement.textContent.substring(1));
    subTotalElement.textContent = '$' + (price + subTotalAmount).toFixed(2);
};

export const totalAmount = () => {
    const subTotalAmount = parseFloat(subTotalElement.textContent.substring(1));
    const taxAmount = parseFloat(taxElement.textContent.substring(1));
    totalAmountElement.textContent =
        '$' + (subTotalAmount + taxAmount).toFixed(2);
};

export const addTotalTax = () => {
    const subTotalAmount = parseFloat(subTotalElement.textContent.substring(1));
    taxElement.textContent = '$' + (subTotalAmount * 0.0975).toFixed(2);
};

export const substractFromSubtotal = (price) => {
    const subTotalAmount = parseFloat(subTotalElement.textContent.substring(1));
    subTotalElement.textContent = '$' + (subTotalAmount - price).toFixed(2);
};
