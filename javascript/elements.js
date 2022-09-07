"use strict";
import { htmlElements } from "./elements.js";
import { properties, propertiesGeneral, presets } from "./rocketProperties.js";

// console.log("oh hey there");
// console.log(
//   "also this aint optimized \nso expect a stroke when \ngoing through this"
// );
// console.log(
//   "also while youre here feel free to add chances to each properties\nthe chances are the values and the output are the keys\ncheck the rocketProperties.js for that"
// );

let currentKey;
let chosenValue;
let enabledOptions = {
  centertankwidth: true,
  height: true,
  boosters: true,
  target: true,
  payload: false,
  stages: false,
  middleengines: false,
  lowerengines: false,
  upperengines: false,
};

let currentPreset;
let curPresetValArr;
let curPresetKeyArr;

// loading presets
const loadPreset = function (name) {
  currentPreset = presets[name];
  curPresetValArr = [];
  curPresetKeyArr = [];
  Object.keys(currentPreset).forEach(function (element) {
    curPresetKeyArr.push(element);
  });
  Object.values(currentPreset).forEach(function (element) {
    curPresetValArr.push(element);
  });
  curPresetValArr.forEach(function (element, idx) {
    if (element.toString().length > 0) {
      properties[curPresetKeyArr[idx]] = curPresetValArr[idx];
    }
  });
  updateText();
};

const randomValue = function (min, max) {
  return Math.random() * (max - min + 1) + min;
};

const updateText = function () {
  htmlElements.height.textContent = properties.height + "m tall rocket";
  htmlElements.centertankwidth.textContent =
    properties.centertankwidth + "m Center Tank width";
  htmlElements.boosters.textContent = properties.boosters + " Boosters";
  htmlElements.payload.textContent = properties.payload + " kg payload mass";
  htmlElements.target.textContent = "Target: " + properties.target;
  htmlElements.stages.textContent = properties.stages + " Stages";
  htmlElements.upperengines.textContent =
    properties.upperengines + " Upper Engines";
  htmlElements.middleengines.textContent =
    properties.middleengines + " Middle Engines";
  htmlElements.lowerengines.textContent =
    properties.lowerengines + " Lower Engines";
};

let picked;
let chance;
let endValue;

const generateProperties = function () {
  for (let i = 0; i < Object.keys(properties).length; i++) {
    currentKey = Object.keys(properties)[i];
    picked = Object.keys(propertiesGeneral[currentKey]);

    chance = propertiesGeneral[currentKey][picked[0]];

    endValue = picked[Math.trunc(randomValue(0, picked.length - 1))];

    properties[currentKey] = endValue;
  }
  updateText();
};

generateProperties();

const updateProperties = function () {
  enabledOptions.height
    ? htmlElements.height.classList.remove("hidden")
    : htmlElements.height.classList.add("hidden");

  enabledOptions.centertankwidth
    ? htmlElements.centertankwidth.classList.remove("hidden")
    : htmlElements.centertankwidth.classList.add("hidden");

  enabledOptions.boosters
    ? htmlElements.boosters.classList.remove("hidden")
    : htmlElements.boosters.classList.add("hidden");

  enabledOptions.target
    ? htmlElements.target.classList.remove("hidden")
    : htmlElements.target.classList.add("hidden");

  enabledOptions.payload
    ? htmlElements.payload.classList.remove("hidden")
    : htmlElements.payload.classList.add("hidden");

  enabledOptions.stages
    ? htmlElements.stages.classList.remove("hidden")
    : htmlElements.stages.classList.add("hidden");

  enabledOptions.lowerengines
    ? htmlElements.lowerengines.classList.remove("hidden")
    : htmlElements.lowerengines.classList.add("hidden");

  enabledOptions.upperengines
    ? htmlElements.upperengines.classList.remove("hidden")
    : htmlElements.upperengines.classList.add("hidden");

  enabledOptions.middleengines
    ? htmlElements.middleengines.classList.remove("hidden")
    : htmlElements.middleengines.classList.add("hidden");
};

let currentCheckbox;

updateProperties();
document.addEventListener("click", updateProperties);
document.querySelectorAll(".btn").forEach(function (element) {
  element.addEventListener("click", function (e) {
    setTimeout(() => {
      currentCheckbox = e.target.classList[0];
      currentCheckbox = currentCheckbox.slice(
        0,
        currentCheckbox.lastIndexOf("btn")
      );

      enabledOptions[currentCheckbox]
        ? (enabledOptions[currentCheckbox] = false)
        : (enabledOptions[currentCheckbox] = true);
      updateProperties();
    }, 10);
  });
});

htmlElements.randomize.addEventListener("click", function () {
  generateProperties();
});

let picked2;
let chosenValue2;

htmlElements.proptext.forEach((element) => {
  element.addEventListener("click", function (e) {
    picked2 = Object.keys(propertiesGeneral[element.classList[0]]);

    properties[element.classList[0]] =
      picked2[Math.trunc(randomValue(0, picked2.length - 1))];

    updateText();
  });
});

htmlElements.preset.forEach(function (element) {
  element.addEventListener("click", function () {
    loadPreset(element.getAttribute("preset"));
  });
});
