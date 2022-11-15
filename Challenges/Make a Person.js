const Person = function(firstAndLast) {
    // Only change code below this line
    // Complete the method below and implement the others similarly
    let name = firstAndLast.split(" ");
    this.getFullName = function() {
      return name.join(" ");
    };

    this.getFirstName = function(){
        return name[0];
    }

    this.getLastName = function(){
        return name[1];
    }

    this.setFirstName = function(str){
        name[0] = str;
    }

    this.setLastName = function(str){
        name[1] = str;
    }
    
    this.setFullName = function(str){
        name = str.split(" ");
    }
  };
  
  const bob = new Person('Bob Ross');

  //bob.setFullName("Haskell Curry");
  //bob.setLastName("Curry");
  console.log(bob.getFullName());