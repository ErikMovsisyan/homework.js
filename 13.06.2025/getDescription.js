const Car = {
    brand : "Mazda",
    model : 3,
    year : 2020,

}
Car.getDescription = function() {
    return `${this.brand} ${this.model}, was born in ${this.year}`;

}
console.log(Car.getDescription());