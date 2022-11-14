function convertHTML(str) {
    let regex = str.match(/[^a-zA-Z\s]/g);
    let newStr = str;
    try{
        for(let i = 0; i < regex.length; i++){
            switch(regex[i]){
                case '&':
                newStr = newStr.replaceAll(regex[i], "&amp;");
                break;

                case '<':
                newStr = newStr.replaceAll(regex[i], "&lt;");
                break;

                case '>':
                newStr =  newStr.replaceAll(regex[i], "&gt;");
                break;
                
                case '"':
                newStr = newStr.replaceAll(regex[i], "&quot;");
                break;

                case "'":
                newStr = newStr.replace("'", "&apos;");
                break;
            }
        }
    }catch(err){

    } 
    return newStr;
  }
  
console.log(convertHTML("Schindler's List"));

//convertHTML("Dolce & Gabbana") should return the string Dolce &amp; Gabbana.
//convertHTML("Hamburgers < Pizza < Tacos") should return the string Hamburgers &lt; Pizza &lt; Tacos.
//convertHTML('Stuff in "quotation marks"') should return the string Stuff in &quot;quotation marks&quot;