// 10-car.js
const cloneCarSymbol = Symbol('cloneCar');

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;

    // Initialize the cloneCarSymbol property with a clone function
    this[cloneCarSymbol] = () => new this.constructor();
  }

  get brand() {
    return this._brand;
  }

  set brand(newBrand) {
    this._brand = newBrand;
  }

  get motor() {
    return this._motor;
  }

  set motor(newMotor) {
    this._motor = newMotor;
  }

  get color() {
    return this._color;
  }

  set color(newColor) {
    this._color = newColor;
  }

  cloneCar() {
    // Use the clone function stored in the cloneCarSymbol property
    return this[cloneCarSymbol]();
  }
}
