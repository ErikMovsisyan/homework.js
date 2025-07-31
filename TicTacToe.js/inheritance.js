class Animal {
    constructor(name) {
        if (new.target === Animal) {
            throw new Error("abstract class cant use new");
           
        }
        this.name = name;

        }
        sound() {
            throw new Error("abstract class cant have implementation");
        }
        color() {
            throw new Error("abstract class cant have implementaton")
        }

    }
 class Dog extends Animal {
    constructor(name) {
        super(name);

    }
    sound() {
        console.log("dog is barking")
    }
    color() {
        console.log("dog have red color");
        
    }
 }
 let a = new Dog("Rex");
 console.log(a);
 

    
