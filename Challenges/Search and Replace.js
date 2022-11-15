function myReplace(str, before, after) {
    let baseStr = str;
    let word = after;
    if(before.charAt(0) == before.charAt(0).toUpperCase()){
        word = after.charAt(0).toUpperCase() + after.substring(1);
    }else{
        word = after.charAt(0).toLowerCase() + after.substring(1);
    }

    if(!baseStr.match(before)){ 
        return "Mis spelling error!";
    }else{

        baseStr = baseStr.replace(before, word);
    }

    return baseStr;
  }
  
  console.log(myReplace("I think we should look up there", "up", "Down"));