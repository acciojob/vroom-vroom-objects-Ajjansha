// Complete the js code
function Car(make, model) {
    this.make = make;
    this.model = model;
}

// Method on Car prototype
Car.prototype.getMakeModel = function () {
    return this.make + " " + this.model;
};

function SportsCar(make, model, topSpeed) {
    Car.call(this, make, model);
    this.topSpeed = topSpeed;
}

// Inherit from Car prototype
SportsCar.prototype = Object.create(Car.prototype);
SportsCar.prototype.constructor = SportsCar;

// Method on SportsCar prototype
SportsCar.prototype.getTopSpeed = function () {
    return this.topSpeed;
};

// Demo usage
const car = new SportsCar("Ferrari", "Testarossa", 200);

document.getElementById("btn").addEventListener("click", function () {
    document.getElementById("makeModel").textContent =
        "Car: " + car.getMakeModel();

    document.getElementById("topSpeed").textContent =
        "Top Speed: " + car.getTopSpeed() + " mph";
});

// Do not change
window.Car = Car;
window.SportsCar = SportsCar;
