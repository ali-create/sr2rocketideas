"use strict";
import { htmlElements } from "./elements.js";
import { properties, propertiesGeneral } from "./rocketProperties.js";
import { functions } from "./functions.js";

console.log("oh hey there");
console.log(
  "also this aint optimized \nso expect a stroke when \ngoing through this"
);

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

const generateProperties = function () {
  for (let i = 0; i < Object.keys(properties).length; i++) {
    currentKey = Object.keys(properties)[i];

    // choose random value from array
    chosenValue =
      propertiesGeneral[currentKey][
        Math.trunc(randomValue(0, [propertiesGeneral[currentKey].length] - 1))
      ];

    properties[currentKey] = chosenValue;
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

let chosenValue2;

htmlElements.proptext.forEach((element) => {
  element.addEventListener("click", function (e) {
    chosenValue2 =
      propertiesGeneral[element.classList[0]][
        Math.trunc(
          randomValue(0, [propertiesGeneral[element.classList[0]].length] - 1)
        )
      ];

    properties[element.classList[0]] = chosenValue2;
    updateText();
  });
});
