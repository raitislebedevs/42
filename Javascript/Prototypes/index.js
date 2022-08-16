//Prototypes
let person = { name: "Raitis" };
let objectbase = Object.getPrototypeOf(person);
console.log(objectbase);
let descriptor = Object.getOwnPropertyDescriptor(objectbase, {});
console.log(descriptor);

//Some exercise
function Circle(radius) {
  //This is an Instanse Member
  this.radius = radius;
  // Removing this and mooving tothe protytypes!
  // this.draw = function () {
  //   console.log("My Drawings are The Best");
  // };
  this.getArea = function () {
    console.log(`Area of the Circle is ${Math.pow(this.radius, 2) * Math.PI}`);
  };
}

//This is an Prototype member
Circle.prototype.draw = function () {
  console.log(`My Drawings are The Best with radius ${this.radius}`);
};
Circle.prototype.getInstanceMembers = function () {
  console.log(`Instance Members are: ${Object.keys(this)}`);
};

const c1 = new Circle(8);
const c2 = new Circle(9);
console.log(c1.draw());
//Object.keys only returns instanse members.
console.log(c1.getInstanceMembers());

// For key in object returns instance + prototype members.

for (let key in c1) console.log(key);

// Some exercise
function HtmlElement() {
  this.click = function () {
    console.log("You clicked me! :)");
  };
}

HtmlElement.prototype.focus = function () {
  console.log("I am focusing");
};

let element = new HtmlElement();
element.click();
element.focus();

console.log("*****************************************");

// How we can make Polimorphism.
function Squere(side, color) {
  Shape.call(this, color);
  this.side = side;
}

function Shape(color) {
  this.color = color;
}

Shape.prototype.duplicate = function () {
  console.log("Some kind of duplication here");
};

//Inheariting the Circle Object from Shape
Squere.prototype = Object.create(Shape.prototype);
Squere.prototype.draw = function () {
  console.log("Drawing a Squere");
};

const s1 = new Squere(2, "green");
console.log(s1);
