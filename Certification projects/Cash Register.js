function checkCashRegister(price, cash, cid) {
    let change = cash - price;
    let register = {
      status: "",
      change: [
        ["ONE HUNDRED", 0],
        ["TWENTY", 0],
        ["TEN", 0],
        ["FIVE", 0],
        ["ONE", 0],
        ["QUARTER", 0],
        ["DIME", 0],
        ["NICKEL", 0],
        ["PENNY", 0],
      ]
    };
    let changeOutput = 0;
    let data = {
      PENNY: 0.01,
      NICKEL: 0.05,
      DIME: 0.1,
      QUARTER: 0.25,
      ONE: 1,
      FIVE: 5,
      TEN: 10,
      TWENTY: 20,
      HUNDRED: 100
    };
    if(getTotalHandOnCash(cid) < change){

      register.status = "INSUFFICIENT_FUNDS";
      register.change = [];
      return register;
    }

    while(change > 0){

      switch(true){
        case cid[3][1] == 0 &&
            cid[2][1] == 0 &&
            cid[1][1] == 0 &&
            cid[0][1] == 0:
          register.status = "INSUFFICIENT_FUNDS";
          register.change = [];
          return register;
      }      

      switch(true){
        case cid[7][1] >= 20 && change >= 20:
          change = Math.round((change - data.TWENTY) * 100) / 100;
          register.change[1][1] += data.TWENTY;
          cid[7][1] -= 20;
          break;

        case cid[6][1] >= 10 && change >= 10:
          change = Math.round((change - data.TEN) * 100) / 100;
          register.change[2][1] += data.TEN;
          cid[6][1] -= 10;
          break;

        case cid[5][1] >= 5 && change >= 5:
          change = Math.round((change - data.FIVE) * 100) / 100;
          register.change[3][1] += data.FIVE;
          cid[5][1] -= 5;
          break;

        case cid[4][1] >= 1 && change >= 1:
          change = Math.round((change - data.ONE) * 100) / 100;
          register.change[4][1] += data.ONE;
          cid[4][1] -= 1;
          break;

        case cid[3][1] >= 0.25 && change >= 0.25:
          change = Math.round((change - data.QUARTER) * 100) / 100;
          register.change[5][1] += data.QUARTER;
          cid[3][1] -= 0.25;
          break;
        
        case cid[2][1] >= 0.1 && change >= 0.1:
          change = Math.round((change - data.DIME) * 100) / 100;
          register.change[6][1] += data.DIME;
          cid[2][1] -= 0.1;
          break;

        case cid[1][1] >= 0.05 && change >= 0.05:
          change = Math.round((change - data.NICKEL) * 100) / 100;
          register.change[7][1] += data.NICKEL;
          cid[1][1] -= 0.05;
          break;

        case cid[0][1] >= 0.01 && change >= 0.01:
          change = Math.round((change - data.PENNY) * 100) / 100;
          register.change[8][1] = Math.round((register.change[8][1] + data.PENNY) * 100) / 100;
          cid[0][1] = Math.round((cid[0][1] - 0.01) * 100) / 100;
          break;
      }
    }

    switch(true){
      case 
          cid[8][1] == 0 &&
          cid[7][1] == 0 &&
          cid[6][1] == 0 && 
          cid[5][1] == 0 &&
          cid[4][1] == 0 &&
          cid[3][1] == 0 &&
          cid[2][1] == 0 &&
          cid[1][1] == 0 &&
          cid[0][1] == 0:
        register.status = "CLOSED";
        register.change = register.change.reverse();
        return register;
    }      

      for(let i = 0; i < register.change.length; i++){
        if(register.change[i][1] == 0){
          register.change[i] = "";
          console.log(register.change[i]);
        }
      }
      register.change = register.change.filter(item => item !="");
      register.status = "OPEN";

    return register;
  }

function getTotalHandOnCash(cid){
  let data = 0; 

  for(let i = 0; i < cid.length; i++){
    if(Array.isArray(cid[i])){
      for(let x = 0; x < cid[i].length; x++){
        if(typeof cid[i][x] == "number"){
          data = data + cid[i][x];
        }

      }
    }
  }
  return Math.round(data * 100) / 100;

}


console.log(checkCashRegister(19.5, 20,
  [["PENNY", 0.5],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 0],
  ["FIVE", 0],
  ["TEN", 0], 
  ["TWENTY", 0],
  ["ONE HUNDRED", 0]]));


