function pairElement(str) {
    let splitData = str.match(/[A-Z]/g);
    let finalData = [];
    for(let i = 0; i < splitData.length; i++){
      let repack = [];
  
      switch(splitData[i]){
        case "G":
          repack.push(splitData[i]);
          repack.push("C");
          break;
        case "C":
          repack.push(splitData[i]);
          repack.push("G");
          break;
        case "A":
          repack.push(splitData[i]);
          repack.push("T");
          break;
        case "T":
          repack.push(splitData[i]);
          repack.push("A");
          break;
        
  
      }
      finalData.push(repack);
    }
  
    return finalData;
  }
  
  console.log(pairElement("GCG"));