function reverseWords(str) {

    let strArr = str.match(/[a-z-A-Z]+[^\s]/g);
    let newStr = "";

    if(!str){
        return str;
    }

    for(let i = strArr.length - 1; i >= 0; i--){
        strArr[i] = reverse(strArr[i]);
    }
    newStr = strArr.join(" ");

    return newStr;

  }

function reverse(str){
    let newStr = "";
    for(let i = str.length - 1; i >= 0; i--){
       newStr += str.charAt(i);
   }
   return newStr;
}

console.log(reverseWords('ehT kciuq nworb xof spmuj revo eht yzal .god'));

//expected output: ehT kciuq nworb xof spmuj revo eht yzal .god