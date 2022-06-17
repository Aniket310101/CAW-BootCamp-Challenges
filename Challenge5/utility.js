import { checkListItems } from "./index.js";

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
//   return newInputField;
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


export const checkCheckBoxStatus = (item) => {
    
}
