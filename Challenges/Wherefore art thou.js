function whatIsInAName(collection, source) {
    const arr = [...collection];
    const sourceKeysArray = Object.keys(source);
    // Only change code below this line
    let result = [];
    for(let i = 0; i < arr.length; i++){

        if(checkSameProperties(arr[i], sourceKeysArray) && checkSameValue(arr[i], sourceKeysArray, source)){
            result.push(arr[i]);
        }
    }
    function checkSameValue(objElement, arrSources, targetSource){
        let checkCount = 0;
        for(let i = 0; i < arrSources.length; i++){
            if(objElement[arrSources[i]] == targetSource[arrSources[i]]){
                checkCount++;
            }
        }

        if(checkCount == arrSources.length){
            return true;
        }else{
            return false;
        }
    }
    function checkSameProperties(objElement, arrSources){
        let checkCount = 0;
        for(let i = 0; i < arrSources.length; i++){
            if(objElement.hasOwnProperty(arrSources[i])){
                checkCount++;
            }
        }

        if(checkCount == arrSources.length){
            return true;
        }

        return false;
    }
    // Only change code above this line
    return result;
  }
  
  console.log(whatIsInAName([{ first: "Romeo", last: "Montague", asdf: "you found me!" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }],
   { last: "Capulet"}));

  //expected output [{ first: "Tybalt", last: "Capulet"}]

  