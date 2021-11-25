"use script";

const accuracy = 1000;

let Watch = {
  watchProperties: {
    clockFaceSize: 300,
    digitSize: 10,
    countDigits: 12,
    clockFaceCenterSize: 8,
    startHandsPosition: 270,
    secondHand: null,
    secondHandLength: 140,
    secondHandThickness: 1,
  },

  init(accuracy) {
    let clockFace = document.createElement("div");
    clockFace.classList.add("clock_face");
    clockFace.style.width = this.watchProperties.clockFaceSize + "px";
    clockFace.style.height = this.watchProperties.clockFaceSize + "px";

    let wrapperForDigits = document.createElement("div");
    wrapperForDigits.classList.add("wrapper_digits");
    let radiusDigitsCircle = this.watchProperties.clockFaceSize / 2 - 20;
    wrapperForDigits.style.height = radiusDigitsCircle * 2 + "px";
    wrapperForDigits.style.width = radiusDigitsCircle * 2 + "px";

    for (let i = 0; i < this.watchProperties.countDigits; i++) {
      let digit = document.createElement("div");
      digit.classList.add("digit");
      digit.style.width = this.watchProperties.digitSize + "px";
      digit.style.height = this.watchProperties.digitSize + "px";
      let angleEachDigitRadians =
        (2 / this.watchProperties.countDigits) * i * Math.PI;
      let left =
        radiusDigitsCircle * Math.sin(angleEachDigitRadians) +
        radiusDigitsCircle +
        "px";
      let top =
        radiusDigitsCircle * Math.cos(angleEachDigitRadians) +
        radiusDigitsCircle +
        "px";
      digit.style.left = left;
      digit.style.top = top;
      wrapperForDigits.append(digit);
    }

    let clockFaceCenter = document.createElement("div");
    clockFaceCenter.classList.add("center");
    clockFaceCenter.style.width =
      this.watchProperties.clockFaceCenterSize + "px";
    clockFaceCenter.style.height =
      this.watchProperties.clockFaceCenterSize + "px";
    wrapperForDigits.append(clockFaceCenter);

    this.watchProperties.secondHand = document.createElement("div");
    this.watchProperties.secondHand.classList.add("second_hand");
    this.watchProperties.secondHand.style.width =
      this.watchProperties.secondHandLength + "px";
    this.watchProperties.secondHand.style.height =
      this.watchProperties.secondHandThickness + "px";
    this.watchProperties.secondHand.style.transformOrigin = "12.5px 50% 0";
    this.watchProperties.secondHand.style.transform = `rotate(${this.watchProperties.startHandsPosition}deg)`;
    wrapperForDigits.append(this.watchProperties.secondHand);

    clockFace.append(wrapperForDigits);
    document.body.append(clockFace);

    this._startWatch(accuracy);
  },

  _startWatch(accuracy) {
    let tik = setInterval(() => moveHands(), accuracy);
    let secondHandsPosition = this.watchProperties.startHandsPosition;
    moveHands = () => {
      secondHandsPosition = secondHandsPosition + 6;
      this.watchProperties.secondHand.style.transform = `rotate(${secondHandsPosition}deg)`;
      console.log("tik");
    };
  },
};

document.addEventListener("DOMContentLoaded", function () {
  Watch.init(accuracy);
});
