class Shape {
    constructor() {
        if (new.target == Shape) {
            throw new Error("Error")
        }
    }
    getArea() {
        throw new Error("Error")
    }
}
class Rectangle extends Shape {
    constructor(a,b) {
        super()
        this.a = a;
        this.b = b;
    }
    getArea() {
        return this.a * this.b;

    }
}
class Circle extends Shape {
    constructor(radius) {
        super()
        this.radius = radius;
    }
    getArea(radius) {
return Math.PI * this.radius
    }
}
let ob = new Rectangle(4,5);
console.log(ob.getArea())
let ob2 = new Circle(6);
console.log(ob2.getArea())
