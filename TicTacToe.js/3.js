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

let obj1 = {
    name: "Vlod",
    foo2: function (){console.log(this.name)}
};

(function (){
    console.log(this)
})()

