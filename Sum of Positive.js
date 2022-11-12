function positiveSum(arr) {
    let newArr = arr.filter(item => item > 0);
    let sum = 0;
    if(newArr == ""){
        return sum;
    }
    for(let i = 0; i < newArr.length; i++){
        sum += newArr[i];
    }

    return sum;
}


console.log(positiveSum([]));