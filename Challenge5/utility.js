let firstItemChecked;
let secondItemChecked;
let isfirstItemChecked = false;

export const getParentElement = () => {
  return document.querySelector(".episodes");
};

function setAttributes(element, attributes) {
  Object.keys(attributes).forEach((attr) => {
    element.setAttribute(attr, attributes[attr]);
  });
}

const setInputFieldAttributes = (element, episode) => {
  let allAttributes = {
    type: "checkbox",
    name: `episode-${episode.id}`,
    id: `episode-${episode.id}`,
  };

  setAttributes(element, allAttributes);
};

const checkMultipleItems = (firstItem, secondItem, inputField) => {
  inputField.forEach((eachItem) => {
    let getItemId = eachItem.getAttribute("id");
    let itemId = parseInt(getItemId.substring(getItemId.indexOf("-") + 1));

    if (itemId > firstItem && itemId < secondItem) {
      eachItem.checked = true;
    }
  });
};

const selectMultipleItems = (firstItem, secondItem) => {
  let inputField = document.querySelectorAll("input");

  if (firstItem > secondItem) {
    let temp = firstItem;
    firstItem = secondItem;
    secondItem = temp;
  }

  checkMultipleItems(firstItem, secondItem, inputField);
};

const selectTheItemClicked = (event) => {
  if (event.shiftKey && isfirstItemChecked) {
    let secondItemId = event.target.id;
    secondItemChecked = parseInt(
      secondItemId.substring(secondItemId.indexOf("-") + 1)
    );
    selectMultipleItems(firstItemChecked, secondItemChecked);
  } else {
    isfirstItemChecked = event.target.checked;
    let firstItemId = event.target.id;
    firstItemChecked = parseInt(
      firstItemId.substring(firstItemId.indexOf("-") + 1)
    );
  }
};

export const createListDiv = (parentElement) => {
  let newListDiv = document.createElement("li");
  parentElement.appendChild(newListDiv);
  return newListDiv;
};

export const createLabelField = (parentElement, episode) => {
  let newLabelFielsd = document.createElement("label");
  newLabelFielsd.setAttribute("for", `episode-${episode.id}`);
  parentElement.appendChild(newLabelFielsd);
  return newLabelFielsd;
};

export const createInputField = (parentElement, episode) => {
  let newInputField = document.createElement("input");
  setInputFieldAttributes(newInputField, episode);
  parentElement.appendChild(newInputField);

  newInputField.addEventListener("click", selectTheItemClicked);
};

export const createSpanField = (parentElement) => {
  let newSpanField = document.createElement("span");
  parentElement.appendChild(newSpanField);
  return newSpanField;
};

export const createNodeSpanText = (parentElement, episode) => {
  let nodeEpisodeNameText = document.createTextNode(
    episode.id + " || " + episode.name
  );
  parentElement.appendChild(nodeEpisodeNameText);
};
