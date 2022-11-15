function smallestCommons(arr) {
    let newArr = [];
    let min = arr[0];
    let max = arr[1];

    if(min > max){
        min = arr[1];
        max = arr[0];
    }

    for(let i = min; i <= max; i++){
        newArr.push(i);
    }

    let result = min;
    for(let i = 1; i < newArr.length; i++){
        result = lcm(result, newArr[i]);
    }

    return result;
  }

function gcd(a, b){
    if(!b){
        return a;
    }

    return gcd(b, a % b);
}

function lcm(a, b){
    return (a * b) / gcd(a, b);
}
  
console.log(smallestCommons([2,10]));


//expected output: 6