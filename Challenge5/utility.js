import { checkListItems } from "./index.js";

let inputField = document.getElementsByTagName("input");

let firstItemChecked;
let secondItemChecked;
let isFirstItemChecked = false;


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


const checkMultipleItems = (firstItem, secondItem) => {
  inputField.forEach((item)=>{
    console.log(item);
  })
  // console.log(inputField);
}


const checkTheItemClicked = (event) => {
  
  // console.log(firstItemChecked);

  if(event.shiftKey){
    let idItemChecked = event.target.id;
    // secondItemChecked = parseInt(idItemChecked.substring(idItemChecked.indexOf('-') + 1)) - 1;
    secondItemChecked = event.target.id;
    // console.log(secondItemChecked - firstItemChecked);
    checkMultipleItems(firstItemChecked, secondItemChecked);
  }
  else{
    let idItemChecked = event.target.id;
    // firstItemChecked = parseInt(idItemChecked.substring(idItemChecked.indexOf('-') + 1)) - 1;
    firstItemChecked = event.target.id;
    isFirstItemChecked = true;

  }
}

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

  newInputField.addEventListener("click", checkTheItemClicked);
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
