let firstItemChecked;
let secondItemChecked;
let isfirstItemChecked = false;

export const getParentElement = () => document.querySelector('.episodes');

// eslint-disable-next-line require-jsdoc
function setAttributes(element, attributes) {
    Object.keys(attributes).forEach((attr) => {
        element.setAttribute(attr, attributes[attr]);
    });
}

const setInputFieldAttributes = (element, episode) => {
    const allAttributes = {
        type: 'checkbox',
        name: `episode-${episode.id}`,
        id: `episode-${episode.id}`,
    };

    setAttributes(element, allAttributes);
};

const checkMultipleItems = (firstItem, secondItem, inputField) => {
    inputField.forEach((eachItem) => {
        const getItemId = eachItem.getAttribute('id');
        const itemId = parseInt(
            getItemId.substring(getItemId.indexOf('-') + 1),
            10,
        );

        if (itemId > firstItem && itemId < secondItem) {
            eachItem.checked = true;
        }
    });
};

const selectMultipleItems = (firstItem, secondItem) => {
    const inputField = document.querySelectorAll('input');

    if (firstItem > secondItem) {
        const temp = firstItem;
        firstItem = secondItem;
        secondItem = temp;
    }

    checkMultipleItems(firstItem, secondItem, inputField);
};

const selectTheItemClicked = (event) => {
    if (event.shiftKey && isfirstItemChecked) {
        const secondItemId = event.target.id;
        secondItemChecked = parseInt(
            secondItemId.substring(secondItemId.indexOf('-') + 1),
            10,
        );
        selectMultipleItems(firstItemChecked, secondItemChecked);
    } else {
        isfirstItemChecked = event.target.checked;
        const firstItemId = event.target.id;
        firstItemChecked = parseInt(
            firstItemId.substring(firstItemId.indexOf('-') + 1),
            10,
        );
    }
};

export const createListDiv = (parentElement) => {
    const newListDiv = document.createElement('li');
    parentElement.appendChild(newListDiv);
    return newListDiv;
};

export const createLabelField = (parentElement, episode) => {
    const newLabelFielsd = document.createElement('label');
    newLabelFielsd.setAttribute('for', `episode-${episode.id}`);
    parentElement.appendChild(newLabelFielsd);
    return newLabelFielsd;
};

export const createInputField = (parentElement, episode) => {
    const newInputField = document.createElement('input');
    setInputFieldAttributes(newInputField, episode);
    parentElement.appendChild(newInputField);

    newInputField.addEventListener('click', selectTheItemClicked);
};

export const createSpanField = (parentElement) => {
    const newSpanField = document.createElement('span');
    parentElement.appendChild(newSpanField);
    return newSpanField;
};

export const createNodeSpanText = (parentElement, episode) => {
    const nodeEpisodeNameText = document.createTextNode(
        `${episode.id} || ${episode.name}`,
    );
    parentElement.appendChild(nodeEpisodeNameText);
};
