function translatePigLatin(str) {
    let index = 0;
    let consonantSet = ""
    let result = "";

    switch(str.charAt(0)){
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
            return str + "way";
    }

    while( str.charAt(index) != "a" 
        && str.charAt(index) != "e" 
        && str.charAt(index) != "i" 
        && str.charAt(index) != "o" 
        && str.charAt(index) != "u"){
        
        consonantSet += str.charAt(index);
        index++;

        if(index == str.length){
            break;
        }

    }

    result = str.substring(index) + consonantSet +"ay";

    return result;
  }
  
  console.log(translatePigLatin("glove"));

  //Waiting:translatePigLatin("glove") should return the string oveglay.
