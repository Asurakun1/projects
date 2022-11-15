function addTogether() {
  if(arguments.length == 1){
    let a = arguments[0];
    if(typeof a != "number"){
      return undefined;
    }
    
    function addAnother(val){

      if(typeof val != "number"){
        return undefined;
      }
      return a + val;
    }

    return addAnother;
  }
  const a = arguments[0];
  const b = arguments[1];

  if(typeof a != "number" || typeof b != "number"){
    return undefined;
  }
  return a + b;
}
  
console.log(addTogether(2,3));