//Object Literals symbols is {} and [] etc...
const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  draw: function () {
    console.log("draw");
  },
};

circle.draw();

function createCircle(radius) {
  return {
    radius,
    draw: function () {
      console.log("draw");
    },
  };
}

const secondCircle = createCircle(3);
secondCircle.draw();

//constructor Functions

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("Drawing in constructor");
  };
}

const anotherCircle = new Circle(2);
anotherCircle.draw();

let number = 10;
function increase(number) {
  number++;
}

increase(number);
console.log(number);

//Stopwatch

function Stopwatch() {
  let startTime;
  let stopTime;
  let running = false;

  this.start = function () {
    if (running) return new Error("Stopwatch is running");
    startTime = new Date();
    running = true;
  };

  this.stop = function () {
    if (!running) return new Error("Stopwatch is stopped");
    stopTime = new Date();
    running = false;
  };

  this.duration = function () {
    return (stopTime.getTime() - startTime.getTime()) / 1000;
  };
}
