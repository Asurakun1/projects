function dropElements(arr, func) {
  let newArr = [...arr];

  for(let i = 0; i < newArr.length; i++){
    if(func(newArr[i])){
      break;
    }
    newArr.shift();
    i--;
  }
    
    return newArr;
  }
  
  console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3;}));