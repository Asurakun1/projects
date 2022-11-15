function sumMix(x){
    let arr = x.map((element => {
        return parseInt(element);
    }));

    return arr.reduce((prev, curr) => prev + curr);
}

console.log(sumMix([9, 3, '7', '3']), 22);