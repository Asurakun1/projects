function diffArray(arr1, arr2) {
    let newArr = [];
    if(arr1.length == 0){
        return arr2;
    }else if(arr2.length == 0){
        return arr1;
    }

    function removeCopy(first, second){
        let array = [];
        let size = 0;

        if(first.length > second.length){
            size = first.length;
        }else{
            size = second.length;
        }
        for(let i = 0; i < size; i++){
            if(first.indexOf(second[i]) === -1){
                array.push(second[i]);
            }
        }
        return array.filter(empty => empty != undefined);
    }

        newArr = (removeCopy(arr1,arr2).concat(removeCopy(arr2,arr1)));
    return newArr;
  }
  console.log(diffArray(
    [1, "calf", 3, "piglet"], [7, "filly"]));