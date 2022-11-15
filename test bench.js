function myRecursion(arr){
    if(arr == 0){
        return 0;
    }
    console.log(arr.shift());
    return myRecursion(arr);


}


console.log(myRecursion([1,2,3,4,5,6,7,8]));