function objCreateP(obj, addp){
  function NO (){}
  NO.prototype = obj;
  const newObj = new NO();
  Object.keys(addp).forEach( i => {
    newObj[i] = addp[i];
  })
  return newObj

}
const obj = {
  cl: ()=>console.log('hey')
}

const obj1 = objCreateP(obj, {
  d: 'asad',
  c: 'asdfas',
});
console.log(obj1)
obj1.cl();
//------------
function ObjectCreaterO (obj, addProp) {
  const newObj = addProp;
  newObj.__proto__ = obj;
  return newObj
}
const obj2 = ObjectCreaterO(obj1,  {
  d: 'asad',
  c: 'asdfas',
})
console.log(obj2)
obj2.cl();