var name = 'Global';
const obj = {
  name: 'Object',
  arrowFunc: () => {
    console.log(this.name);
  },
  regularFunc: function() {
    console.log(this.name);
  }
};
obj.arrowFunc();
obj.regularFunc();
console.log (undefined + 1)
const user = {
  name: 'Alice',
  friends: ['Bob', 'Charlie'],
  printFriends: function() {
    this.friends.forEach(()=> {console.log(this);
      console.log(`${this.name} knows ${this.friend}`);
    });
  }
};
user.printFriends();
let res = !'hello' + 'world' +1
console.log(res);

