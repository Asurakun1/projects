function sumFibs(num) {
    let fiboArr = [];
    let sum = 0;
    for(let i = 0; i <= num; i++){
        if(fibo(i) <= num){
            fiboArr.push(fibo(i));
        }else{
            break;
        }
    }
    fiboArr = findOdd(fiboArr);

    for(let i = 0; i < fiboArr.length; i++){
        sum += fiboArr[i];
    }
    return sum;
  }
function findOdd(arr){
    let newArr = [];

    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 == 0){
            continue;
        }else{
            newArr.push(arr[i]);
        }
    }

    return newArr;
}
function fibo(num){
    if(num <= 1){
        return num;
    }
    return fibo(num - 1) + fibo(num - 2);
}
console.log(sumFibs(75025));
  //sumFibs(4) should return 5.
  //sumFibs(1000) should return 1785.
  //sumFibs(75025) should return 135721.