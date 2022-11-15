function sumPrimes(num) {
    let numArr = numToArray(num);
    let sum = 0;
    for(let i = 0; i < numArr.length; i++){
        sum += numArr[i];
    }
    return sum;
  }
function numToArray(num){
    let numArr = [];
        //check for prime numbers
        const isPrime = num => {
            for(let i = 2, s = Math.sqrt(num); i <= s; i++)
                if(num % i === 0) return false; 
            return num > 1;
        }
    
        for(let i = 1; i <= num; i++){
            if(isPrime(i)){
                numArr.push(i);
            }
        }
    return numArr;
}
  
console.log(sumPrimes(10));

  //sumPrimes(10) should return 17.