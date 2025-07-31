var name = 'Global';
const obj = {
  name: 'Object',
  method: function() {
    setTimeout(function() {
      console.log(this.name);
    }, 1000);
  }
};
obj.method();


