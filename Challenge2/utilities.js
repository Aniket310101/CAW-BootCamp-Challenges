


const addTextInCart = (element) => {
    let textNode = document.createTextNode("In-Cart");
    element.appendChild(textNode);
};

const changeAddButtonStatus = (element) => {
    element.className = 'in-cart';
    element.innerHTML = '<img src="images/check.svg" alt="Check" />';
    addTextInCart(element);
}


const updateCurrentItemPrice = (quantity, element) => {
    if(quantity)
    {
        console.log(typeof(element.childNodes[3].textContent));
        let currentPrice = parseFloat((element.childNodes[3].textContent).substring(1));
        element.childNodes[3].textContent = itemDetails.itemPrice * quantity;
    }
    // console.log(currentPrice);
}

const updateQuantityToIncrease = (element) => {
    let quantity = element.childNodes[0].childNodes[1].textContent;
    element.childNodes[0].childNodes[1].textContent = parseInt(quantity) + 1;
    element.childNodes[2].childNodes[1].textContent = parseInt(quantity) + 1;
    return parseInt(quantity) + 1;
}

const updateQuantityToDecrease = (element) => {
    let quantity = element.childNodes[0].childNodes[1].textContent;
    // console.log(typeof(quantity));
    if(quantity-1 === 0){
        // console.log("remove");
    }
    else{
        element.childNodes[0].childNodes[1].textContent = parseInt(quantity) - 1;
        element.childNodes[2].childNodes[1].textContent = parseInt(quantity) - 1;
    }

    return parseInt(quantity) - 1;
    
}

const getParentElement = (element) => {
    if(element.tagName === 'IMG'){
        return element.parentElement.parentElement.parentElement;
    }
    else{
        return element.parentElement.parentElement;
    }
}

const increaseQuantity = (event) => {
    event.stopPropagation();
    let parentListNode = getParentElement(event.target);
    let currentQuantity = updateQuantityToIncrease(parentListNode);
    updateCurrentItemPrice(currentQuantity, parentListNode);

}

const decreaseQuantity = (event) => {
    event.stopPropagation();
    let parentListNode = getParentElement(event.target);
    let currentQuantity = updateQuantityToDecrease(parentListNode);
    updateCurrentItemPrice(currentQuantity, parentListNode);
}

const createListItem = () => document.createElement("li");

const createDivElement = () => document.createElement("div");

const createImageElement = () => document.createElement("img");

const createParaElement = () => document.createElement("p");

const createButtonElement = () => document.createElement("button");

const moveItemToYourCart = (itemDetails) => {
    let yourCartDiv = document.querySelector(".cart-summary");
    // console.log(yourCartDiv);

    let newListItem = createListItem();
    yourCartDiv.appendChild(newListItem);

    let newDivElement = createDivElement();
    newDivElement.classList.add("plate");
    newListItem.appendChild(newDivElement);

    let newImgElement = createImageElement();
    newImgElement.classList.add("plate");
    newImgElement.setAttribute("src", itemDetails.itemImage);
    newDivElement.appendChild(newImgElement);

    let newDivForQuantity = createDivElement();
    newDivForQuantity.classList.add("quantity");
    newDivForQuantity.innerText = 1;
    newDivElement.appendChild(newDivForQuantity);

    let newContentDiv = createDivElement();
    newContentDiv.classList.add("content");
    newListItem.appendChild(newContentDiv);

    let newElementForName = createParaElement();
    newElementForName.classList.add("menu-item");
    newElementForName.innerText = itemDetails.itemName;
    newContentDiv.appendChild(newElementForName);

    let newElementForPrice = createParaElement();
    newElementForPrice.classList.add("price");
    newElementForPrice.innerText = itemDetails.itemPrice;
    newContentDiv.appendChild(newElementForPrice);


    let newElementForQuantityWrapper = createDivElement();
    newElementForQuantityWrapper.classList.add("quantity__wrapper");
    // newElementForQuantityWrapper.addEventListener("click", decreaseQuantity)
    newListItem.appendChild(newElementForQuantityWrapper);

    let decreaseButton = createButtonElement();
    decreaseButton.classList.add("decrease");
    // decreaseButton.addEventListener("click", decreaseQuantity);
    decreaseButton.onclick = decreaseQuantity;
    newElementForQuantityWrapper.appendChild(decreaseButton);


    let decreaseImage = createImageElement();
    decreaseImage.setAttribute("src", "images/chevron.svg");
    decreaseButton.appendChild(decreaseImage);

    let divForQuantity = createDivElement();
    divForQuantity.classList.add("quantity");
    divForQuantity.innerText = 1;
    newElementForQuantityWrapper.appendChild(divForQuantity);


    let increaseButton = createButtonElement();
    increaseButton.classList.add("increase");
    increaseButton.addEventListener("click", increaseQuantity);
    newElementForQuantityWrapper.appendChild(increaseButton);


    let increaseImage = createImageElement();
    increaseImage.setAttribute("src", "images/chevron.svg");
    increaseButton.appendChild(increaseImage);


    let createSubtotalDiv = createDivElement();
    createSubtotalDiv.classList.add("subtotal");
    createSubtotalDiv.innerText = itemDetails.itemPrice;
    newListItem.appendChild(createSubtotalDiv);

}


const saveItemDetails = (parentElement) => {
    return {
        itemName: parentElement.childNodes[1].innerText,
        itemPrice: parentElement.childNodes[3].innerText,
        itemImage: parentElement.previousSibling.previousSibling.childNodes[1].src
    }
}

export const onAddButtonClick = (event) => {
    if(event.target.className === 'add'){    
        changeAddButtonStatus(event.target);
        let itemDetails = saveItemDetails(event.target.parentNode);
        // console.log(itemDetails.itemPrice);
        moveItemToYourCart(itemDetails);

    };
}