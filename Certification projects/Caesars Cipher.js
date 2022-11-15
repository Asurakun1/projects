function rot13(str) {
    let c = str.charCodeAt(0) + 13;

    console.log(String.fromCharCode(c));
    return c;
  }
  
rot13("SERR PBQR PNZC");

//expected output: FREE CODE CAMP