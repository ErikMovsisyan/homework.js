class Product {
    constructor(name,price,description) {
        this.name = name;
        this.price = price;
        this.description = description;
    }
    getDetails() {
        console.log("details")
    }

}
class electronicProduct extends Product {
    constructor(name,price,description,warrantyPeriod,brand) {
        super(name,price,description);
        this.warrantyPeriod = warrantyPeriod;
        this.brand = brand;
    }
    getDetails() {
        return this.brand;
    }
}
class ClothingProduct extends Product {
    constructor(name,price, description,size,material,gender) {
        super(name,price,description);
        this.size = size;
        this.material = material;
        this.gender = gender;
    }
    getDetails() {
        return this.material;
    }
}
let a = new electronicProduct("apple","343","isjfaoifgj","dioso","dsfnons")
console.log(a)