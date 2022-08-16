//Classes are the same as prototype inheritance

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  //Instance method
  draw() {
    console.log(`Drawing stuff with radius ${this.radius}`);
  }

  //Static methods won't be seen under the instance but under the class makes sense, but both in one?
  static pares(str) {
    const radius = JSON.parse(str).radius;
    return new Circle.radius();
  }
}

const c = new Circle(8);
