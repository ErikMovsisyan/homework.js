const person = {
    name: "John",
    surname: "Smith",
    get fullName() {
        return `${this.name} ${this.surname}`;
    },
    set fullName(fullName) {
        [this.name, this.surname] = fullName.split(' ');
    }
};
const user = Object.create(person, {
    name: {
        value: 'Mike',
    }
});
const admin = Object.create(user, {
    isAdmin: {
        value: true,
        writable: true,
        enumerable: true,
        configurable: true
    }
});
for (const key in admin) {
    console.log(admin[key]);
}

