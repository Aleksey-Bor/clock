"use script";

const accuracy = 1000;

let Watch = {
  watchProperties: {
    clockFaceSize: 300,
    digitSize: 10,
    countDigits: 12,
    clockFaceCenterSize: 8,
    secondHand: null,
    secondHandLength: 140,
    secondHandThickness: 1,
    minuteHand: null,
    minuteHandLength: 140,
    minuteHandThickness: 4,
    hoursHand: null,
    hoursHandLength: 110,
    hoursHandThickness: 4,
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
    let seconds = new Date().getSeconds();
    let secondHandPosition = (360 * seconds) / 60 - 90;
    this.watchProperties.secondHand.style.transformOrigin = "13px 50% 0";
    this.watchProperties.secondHand.style.transform = `rotate(${secondHandPosition}deg)`;
    wrapperForDigits.append(this.watchProperties.secondHand);

    this.watchProperties.minuteHand = document.createElement("div");
    this.watchProperties.minuteHand.classList.add("minute_hand");
    this.watchProperties.minuteHand.style.width =
      this.watchProperties.minuteHandLength + "px";
    this.watchProperties.minuteHand.style.height =
      this.watchProperties.minuteHandThickness + "px";
    let minutes = new Date().getMinutes();
    let minuteHandPosition = (360 * minutes) / 60 - 90;
    this.watchProperties.minuteHand.style.transformOrigin = "13px 50% 0";
    this.watchProperties.minuteHand.style.transform = `rotate(${minuteHandPosition}deg)`;
    wrapperForDigits.append(this.watchProperties.minuteHand);

    this.watchProperties.hoursHand = document.createElement("div");
    this.watchProperties.hoursHand.classList.add("hours_hand");
    this.watchProperties.hoursHand.style.width =
      this.watchProperties.hoursHandLength + "px";
    this.watchProperties.hoursHand.style.height =
      this.watchProperties.hoursHandThickness + "px";
    let hours = new Date().getHours();
    let hoursHandPosition = (360 * (hours + minutes * (1 / 60))) / 12 - 90;
    this.watchProperties.hoursHand.style.transformOrigin = "13px 50% 0";
    this.watchProperties.hoursHand.style.transform = `rotate(${hoursHandPosition}deg)`;
    wrapperForDigits.append(this.watchProperties.hoursHand);

    clockFace.append(wrapperForDigits);
    document.body.append(clockFace);

    this._startWatch(accuracy);
  },

  _startWatch(accuracy) {
    let tik = setInterval(() => moveHands(), accuracy);
    let tikSong = new Audio("./assets/tik-tik.mp3");
    moveHands = () => {
      let time = new Date();
      let seconds = time.getSeconds();
      let minutes = time.getMinutes();
      let hours = time.getHours();

      let secondHandPosition = (360 * seconds) / 60 - 90;
      tikSong.play();
      this.watchProperties.secondHand.style.transform = `rotate(${secondHandPosition}deg)`;
      console.log(`${hours}:${minutes}:${seconds}`);

      let minutesHandPosition = (360 * minutes) / 60 - 90;
      this.watchProperties.minuteHand.style.transform = `rotate(${minutesHandPosition}deg)`;

      let hoursHandPosition = (360 * (hours + minutes * (1 / 60))) / 12 - 90;
      /* (30 * (hours + (1 / 60) * minutes)) - 90; */
      this.watchProperties.hoursHand.style.transform = `rotate(${hoursHandPosition}deg)`;
    };
  },
};

document.addEventListener("DOMContentLoaded", function () {
  Watch.init(accuracy);
});
