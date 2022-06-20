import {
  subTotalElement,
  taxElement,
  totalAmountElement,
} from "./utilities.js";

export const addToSubtotal = (price) => {
  let subTotalAmount = parseFloat(subTotalElement.textContent.substring(1));
  subTotalElement.textContent = "$" + (price + subTotalAmount).toFixed(2);
};

export const totalAmount = () => {
  let subTotalAmount = parseFloat(subTotalElement.textContent.substring(1));
  let taxAmount = parseFloat(taxElement.textContent.substring(1));
  totalAmountElement.textContent =
    "$" + (subTotalAmount + taxAmount).toFixed(2);
};

export const addTotalTax = () => {
  let subTotalAmount = parseFloat(subTotalElement.textContent.substring(1));
  taxElement.textContent = "$" + (subTotalAmount * 0.0975).toFixed(2);
};

export const substractFromSubtotal = (price) => {
  let subTotalAmount = parseFloat(subTotalElement.textContent.substring(1));
  subTotalElement.textContent = "$" + (subTotalAmount - price).toFixed(2);
};
