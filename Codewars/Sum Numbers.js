// Sum Numbers
function sum (numbers) {
  "use strict";
  let value = 0;

  for(let i = 0; i < numbers.length; i++){
    value += numbers[i];
  }
  return value;

};

console.log(sum([1, 5.2, 4, 0, -1]));