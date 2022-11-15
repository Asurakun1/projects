function telephoneCheck(str) {
    let arrayOfNumbers = str.match(/[0-9]/g);
    let rejectedContainers = str.match(/[^0-9()-\s]/g);
    let parenthesesCount = str.match(/[()]/g);
    let dashCount = str.match(/[-]/g);

    if(arrayOfNumbers.length == 10 || 
        (arrayOfNumbers.length == 11 && arrayOfNumbers[0] == 1)
        && str.charAt(0) != '-'){

        try{
            for(let i = 0; i < rejectedContainers.length; i++){
                if(str.includes(rejectedContainers[i])){
                    return false;
                }
            }
        }catch(e){

        }
        if((str.includes("(") && !str.includes(")")) || (!str.includes("(") && str.includes(")"))){
            return false;
        }else if((str.includes("(") && str.includes(")")) && parenthesesCount.length != 2){
            return false;
        }

        if(str.includes("-")){
            if(dashCount.length > 2){
                return false;
            }
        }   
        if((str.includes("(") && str.includes(")"))){

            let counter = 0;
            for(let i = 0; i < str.length; i++){
                if(str.charAt(i) == '('){
                    while(str.charAt(i) != ')'){
                        counter++;
                        i++;

                    }
                }
            }
            if(counter - 1 != 3){
                return false;
            }
        }
        return true;
    }
    return false;
  }
  
console.log(telephoneCheck("1 (555) 555 5555"));