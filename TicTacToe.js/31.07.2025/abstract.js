class StorageProvider {
    constructor() {
        if (new.target === StorageProvider) {
            throw new Error("this is abstract class");
        }
    }
    getfile(name) {
        throw new Error("abstract method");
    }
    storefile(name) {
        throw new Error("abstract method");
    }
    foo() {
        console.log("hello");
    }
}

class CDNProvider {
    constructor() {
        if (new.target === CDNProvider) {
            throw new Error("this is abstract class");
        }
    }
    getCDNadress() {
        throw new Error("abstract method");
    }
    moo() {
        console.log("bye");
    }
}

function MP(Base) {
    return class extends Base {
        constructor() {
            super();
        }
    };
}

function CP(Base) {
    return class extends Base {
        constructor() {
            super();
        }
    };
}

class Amazon extends MP(CP(class {})) {}

let b = new Amazon();
console.log(b);  
