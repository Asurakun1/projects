function spinalCase(str) {
    let newStr = str;
    let strArr = newStr.match(/[A-Za-z]+/g);
    for(let i = 0; i < strArr.length; i++){
        strArr[i] = splitUpper(strArr[i]);
        strArr[i] = strArr[i].replaceAll(" ", "-");
    }

    function splitUpper(leStr){
        let newStr = "";
        let pos = 0;
            for(let x = 1; x < leStr.length; x++){
                if(leStr[x] == leStr[x].toUpperCase()){
                    newStr = newStr + leStr.substring(pos, x) + " ";
                    pos = x;
                }  
            }
            newStr = newStr + leStr.substring(pos) + " ";
        return newStr.trim();
    }
    return strArr.join("-").toLowerCase();
  }
  
  console.log(spinalCase('---thisIs---/Spinal--Tap'));
  //expected output this-is-spinal-tap