"use script";

let accuracy = 10000;

let Watch = {
  watchProperties: {
    clockFaceSize: 300,
    digitSize: 10,
    countDigits: 12,
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
      let left = (radiusDigitsCircle * Math.sin(angleEachDigitRadians) + radiusDigitsCircle) + "px";
      let top = (radiusDigitsCircle * Math.cos(angleEachDigitRadians) + radiusDigitsCircle) + "px";
      digit.style.left = left;
      digit.style.top = top;
      wrapperForDigits.append(digit);
    }
    clockFace.append(wrapperForDigits);
    document.body.append(clockFace);
  },
};

document.addEventListener("DOMContentLoaded", function () {
  Watch.init(accuracy);
});
