function truthCheck(collection, pre) {

    for(let i = 0; i < collection.length; i++){
        if(!collection[i][pre]){
            return false;
        }
    }
    return true;
  }
  
console.log(truthCheck([{name: "freeCodeCamp", users: [{name: "Quincy"}, {name: "Naomi"}]},
                        {name: "Code Radio", users: [{name: "Camperbot"}]},
                        {name: "", users: []}], "users"));