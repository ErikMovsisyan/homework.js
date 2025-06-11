function accept(a,b,c)  {
  return c-(a+b) <=Number.EPSILON ? true : false
}
console.log(accept(0.1,0.2,0.3))