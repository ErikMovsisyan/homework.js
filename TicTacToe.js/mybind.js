Function.prototype.mybind = function(context, ...args) {
   context = context || globalThis;
   context = Object(context);
   const fn = this;

   return function(...moreArgs) {
      const symb = Symbol('tmp');
      context[symb] = fn;
      const res = context[symb](...args,...moreArgs);
      delete context[symb];
      return res;
   }
    
}
function greet(msg,from){
    console.log(msg + this.name, "from", from);
    
}

let person = {
    name: "Erik",
}

let bound = greet.mybind(person);
bound("Hello ",'yerevan')
