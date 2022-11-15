function palindrome(str) {
    let regex = str.match(/[A-Za-z0-9]/g);
    let word = regex.join("").toLowerCase();

    return recursivelyCheck(word);
  }

function recursivelyCheck(str){
    
    if(str.length <= 1){
        return true;
    }
    if(str.charAt(0) == str.charAt(str.length - 1)){
        return recursivelyCheck(str.substring(1,(str.length - 1)));
    }
    return false;

}
  
console.log(palindrome("not a palindrome"));

//expectedout true