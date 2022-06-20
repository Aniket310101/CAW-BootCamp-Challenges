import {
  addToSubtotal,
  totalAmount,
  addTotalTax,
  substractFromSubtotal,
} from './calculateAmount.js';

export const subTotalElement = document.querySelector('.amount.price.subtotal');
export const taxElement = document.querySelector('.amount.price.tax');
export const totalAmountElement = document.querySelector('.amount.price.total');

const addTextInCart = (element) => {
  const textNode = document.createTextNode('In-Cart');
  element.appendChild(textNode);
};

export const isCartEmpty = () => {
  if (
    subTotalElement.textContent === '$0.00' &&
    taxElement.textContent === '$0.00' &&
    totalAmountElement.textContent === '$0.00'
  ) {
    document.querySelector('.empty').style.display = 'block';
  } else {
    document.querySelector('.empty').style.display = 'none';
  }
};

const changeAddButtonStatus = (element) => {
  element.className = 'in-cart';
  element.innerHTML = '<img src="images/check.svg" alt="Check" />';
  addTextInCart(element);
};

const changeButtonStatusToAdd = (addButton) => {
  addButton.className = 'add';
  addButton.innerHTML = 'Add to Cart';
};

const updateCurrentItemPriceOnIncrease = (quantity, element, itemDetails) => {
  if (quantity) {
    const currentPrice = parseFloat(itemDetails.itemPrice.substring(1));
    // addToSubtotal(currentPrice);
    const newPrice = (currentPrice * quantity).toFixed(2);
    element.childNodes[3].textContent = '$' + newPrice;
    addToSubtotal(currentPrice);
    addTotalTax();
    totalAmount();
  }
};

const updateCurrentItemPriceOnDecrease = (quantity, element, itemDetails) => {
  if (quantity) {
    const currentPrice = parseFloat(
      element.childNodes[3].textContent.substring(1),
    );
    const originalPrice = parseFloat(itemDetails.itemPrice.substring(1));
    const newPrice = (currentPrice - originalPrice).toFixed(2);
    element.childNodes[3].textContent = '$' + newPrice;
    substractFromSubtotal(originalPrice);
    addTotalTax();
    totalAmount();
  }
};

const updateQuantityToIncrease = (element) => {
  const quantity = element.childNodes[0].childNodes[1].textContent;
  element.childNodes[0].childNodes[1].textContent = parseInt(quantity) + 1;
  element.childNodes[2].childNodes[1].textContent = parseInt(quantity) + 1;
  return parseInt(quantity) + 1;
};

const updateQuantityToDecrease = (addButtonClicked, element, itemPrice) => {
  const quantity = element.childNodes[0].childNodes[1].textContent;
  if (quantity - 1 === 0) {
    element.remove();
    substractFromSubtotal(parseFloat(itemPrice.substring(1)));
    addTotalTax();
    totalAmount();
    isCartEmpty();
    changeButtonStatusToAdd(addButtonClicked);
  } else {
    element.childNodes[0].childNodes[1].textContent = parseInt(quantity) - 1;
    element.childNodes[2].childNodes[1].textContent = parseInt(quantity) - 1;
  }

  return parseInt(quantity) - 1;
};

const getParentElement = (element) => {
  if (element.tagName === 'IMG') {
    return element.parentElement.parentElement.parentElement;
  } else {
    return element.parentElement.parentElement;
  }
};

const increaseQuantity = (itemDetails) => {
  return (event) => {
    event.stopPropagation();
    const parentListNode = getParentElement(event.target);
    const currentQuantity = updateQuantityToIncrease(parentListNode);
    updateCurrentItemPriceOnIncrease(
      currentQuantity,
      parentListNode,
      itemDetails,
    );
  };
};

const decreaseQuantity = (itemDetails, addButtonClicked) => {
  return (event) => {
    event.stopPropagation();
    const parentListNode = getParentElement(event.target);
    const currentQuantity = updateQuantityToDecrease(
      addButtonClicked,
      parentListNode,
      itemDetails.itemPrice,
    );
    updateCurrentItemPriceOnDecrease(
      currentQuantity,
      parentListNode,
      itemDetails,
    );
  };
};

const createListItem = () => document.createElement('li');

const createDivElement = () => document.createElement('div');

const createImageElement = () => document.createElement('img');

const createParaElement = () => document.createElement('p');

const createButtonElement = () => document.createElement('button');

const moveItemToYourCart = (addButtonClicked, itemDetails) => {
  const yourCartDiv = document.querySelector('.cart-summary');

  const newListItem = createListItem();
  yourCartDiv.appendChild(newListItem);

  const newDivElement = createDivElement();
  newDivElement.classList.add('plate');
  newListItem.appendChild(newDivElement);

  const newImgElement = createImageElement();
  newImgElement.classList.add('plate');
  newImgElement.setAttribute('src', itemDetails.itemImage);
  newDivElement.appendChild(newImgElement);

  const newDivForQuantity = createDivElement();
  newDivForQuantity.classList.add('quantity');
  newDivForQuantity.innerText = 1;
  newDivElement.appendChild(newDivForQuantity);

  const newContentDiv = createDivElement();
  newContentDiv.classList.add('content');
  newListItem.appendChild(newContentDiv);

  const newElementForName = createParaElement();
  newElementForName.classList.add('menu-item');
  newElementForName.innerText = itemDetails.itemName;
  newContentDiv.appendChild(newElementForName);

  const newElementForPrice = createParaElement();
  newElementForPrice.classList.add('price');
  newElementForPrice.innerText = itemDetails.itemPrice;
  newContentDiv.appendChild(newElementForPrice);

  const newElementForQuantityWrapper = createDivElement();
  newElementForQuantityWrapper.classList.add('quantity__wrapper');
  newListItem.appendChild(newElementForQuantityWrapper);

  const decreaseButton = createButtonElement();
  decreaseButton.classList.add('decrease');
  decreaseButton.addEventListener(
    'click',
    decreaseQuantity(itemDetails, addButtonClicked),
  );
  newElementForQuantityWrapper.appendChild(decreaseButton);

  const decreaseImage = createImageElement();
  decreaseImage.setAttribute('src', 'images/chevron.svg');
  decreaseButton.appendChild(decreaseImage);

  const divForQuantity = createDivElement();
  divForQuantity.classList.add('quantity');
  divForQuantity.innerText = 1;
  newElementForQuantityWrapper.appendChild(divForQuantity);

  const increaseButton = createButtonElement();
  increaseButton.classList.add('increase');
  increaseButton.addEventListener('click', increaseQuantity(itemDetails));
  newElementForQuantityWrapper.appendChild(increaseButton);

  const increaseImage = createImageElement();
  increaseImage.setAttribute('src', 'images/chevron.svg');
  increaseButton.appendChild(increaseImage);

  const createSubtotalDiv = createDivElement();
  createSubtotalDiv.classList.add('subtotal');
  createSubtotalDiv.innerText = itemDetails.itemPrice;
  newListItem.appendChild(createSubtotalDiv);
};

const saveItemDetails = (parentElement) => {
  return {
    itemName: parentElement.childNodes[1].innerText,
    itemPrice: parentElement.childNodes[3].innerText,
    itemImage: parentElement.previousSibling.previousSibling.childNodes[1].src,
  };
};

export const onAddButtonClick = (event) => {
  if (event.target.className === 'add') {
    const addButtonClicked = event.target;
    changeAddButtonStatus(event.target);
    const itemDetails = saveItemDetails(event.target.parentNode);
    addToSubtotal(parseFloat(itemDetails.itemPrice.substring(1)));
    addTotalTax();
    totalAmount();
    moveItemToYourCart(addButtonClicked, itemDetails);
    isCartEmpty();
  }
};
