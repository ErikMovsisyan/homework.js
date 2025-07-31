class Shape {
    area() {
        throw new Error("method area must be implemented");
    }
}
class Rectangle extends Shape {
    constructor(width,height) {
        super();
        this.width = width;
        this.height = height;
    }
    area() {
        return this.height * this.width;
    }
    setWidth(width) {
        this.width = width;
    }
    setHeight(height) {
        this.height = height;
    }
}
class Square extends Shape {
    constructor(side) {
        super();
        this.side = side;
    }
    area() {
        return this.side * this.side;
    }
    setSide(side) {
        this.side = side;
    }
}
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    area() {
        return this.radius * Math.PI * this.radius;
    }
    setRadius(radius) {
        this.radius = radius;
    }
}
function renderArea(shape) {
    console.log("Area is", shape.area());
}
const shape = new Circle(6);
renderArea(shape)