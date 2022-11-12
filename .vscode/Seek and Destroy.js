function destroyer(arr) {
   // console.log([...arguments]);
    let params = [...arguments].slice(1);
    let newArr = [...arr];
    for(let i = 0; i < params.length; i++){
      newArr = newArr.filter(item => item != params[i]);
  }
  return newArr;
}
  console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));