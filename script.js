"use script";

let accuracy = 1000;

let Watch = {
  watchParts: { clockFace: null, number: null },

  init(accuracy) {
    this.watchParts.clockFace = document.createElement("div");
    
    this.watchParts.clockFace.classList.add("clock_face");
    for (let i = 0; i < 12; i++) {
      this.watchParts.number = document.createElement("div");
      this.watchParts.number.classList.add("number");
      this.watchParts.clockFace.append(this.watchParts.number);
    }
    document.body.append(this.watchParts.clockFace);
    console.log(this.watchParts.clockFace);


  },
};

document.addEventListener("DOMContentLoaded", function () {
  Watch.init(accuracy);
});
