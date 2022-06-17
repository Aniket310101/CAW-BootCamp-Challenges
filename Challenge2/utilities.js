const addTextInCart = (element) => {
    let textNode = document.createTextNode("In-Cart");
    element.appendChild(textNode);
};

const changeAddButtonStatus = (element) => {
    element.className = 'in-cart';
    element.innerHTML = '<img src="images/check.svg" alt="Check" />';
    addTextInCart(element);

}

export const onAddButtonClick = (event) => {
    changeAddButtonStatus(event.target);
}