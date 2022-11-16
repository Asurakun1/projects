while(change > 0){
    switch(true){

      case change >= data.HUNDRED:
        change = Math.round((change - data.HUNDRED) * 100) / 100;
        register.change[0][1] += data.HUNDRED;
        break;

      case change >= data.TWENTY:
        change = Math.round((change - data.TWENTY) * 100) / 100;
        register.change[1][1] += data.TWENTY;
        break;

      case change >= data.TEN:
        change = Math.round((change - data.TEN) * 100) / 100;
        register.change[2][1] += data.TEN;
        break;

      case change >= data.FIVE:
        change = Math.round((change - data.FIVE) * 100) / 100;
        register.change[3][1] += data.FIVE;
        break;

      case change >= data.ONE:
        change = Math.round((change - data.ONE) * 100) / 100;
        register.change[4][1] += data.ONE;
        break;
      
      case change >= data.QUARTER:
        change = Math.round((change - data.QUARTER) * 100) / 100;
        register.change[5][1] += data.QUARTER;
        break;

      case change >= data.DIME:
        change = Math.round((change - data.DIME) * 100) / 100;
        register.change[6][1] += data.DIME;
        break;

      case change >= data.NICKEL:
        change = Math.round((change - data.NICKEL) * 100) / 100;
        register.change[7][1] += data.NICKEL;
        break;
      case change >= data.PENNY:
        change = Math.round((change - data.PENNY) * 100) / 100;
          register.change[8][1] += data.PENNY;
          break;
    }

  }