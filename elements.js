"use strict";
let htmlElements = [];
const GE = function (_class) {
  return document.querySelector(_class);
};
const GEA = function (_class) {
  return document.querySelectorAll(_class);
};
const elementsToProcess = {
  height: GE(".height"),
  centertankwidth: GE(".centertankwidth"),
  target: GE(".target"),
  boosters: GE(".boosters"),
  payload: GE(".payload"),
  stages: GE(".stages"),
  middleengines: GE(".middleengines"),
  upperengines: GE(".upperengines"),
  lowerengines: GE(".lowerengines"),
  heightbtn: GE(".heightbtn"),
  centertankwidthbtn: GE(".centertankwidthbtn"),
  targetbtn: GE(".targetbtn"),
  boostersbtn: GE(".boostersbtn"),
  payloadbtn: GE(".payloadbtn"),
  stagesbtn: GE(".stagesbtn"),
  middleenginesbtn: GE(".middleenginesbtn"),
  upperenginesbtn: GE(".upperenginesbtn"),
  lowerenginesbtn: GE(".lowerenginesbtn"),
  randomize: GE(".randomize"),
  proptext: GEA(".proptext"),
};

htmlElements = elementsToProcess;

export { htmlElements };
