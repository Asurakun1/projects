function uniteUnique(arr) {
    let args = [...arguments];
    let newArr = arr;
    for(let i = 1; i < args.length; i++){
      newArr.push(...args[i]);
    }
    let test = newArr.reduce(
        (accumulator, currentValue) => {
          if (!accumulator.includes(currentValue)) {
            return [...accumulator, currentValue];
          }
          return accumulator;
        },
        [],
      );
    return test;
  }
  
  console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));



  //uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].
