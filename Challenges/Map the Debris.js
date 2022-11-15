function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    let array = arr;
    let orbitalPeriod = 0;

    for(let i = 0; i < array.length; i++){
        array[i].orbitalPeriod =  Math.round(2 * Math.PI * Math.sqrt(Math.pow(earthRadius + array[i].avgAlt, 3) / GM));
        delete array[i].avgAlt;
    }
    return array;
  }

  console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));


//expected output: [{name: "sputnik", orbitalPeriod: 86400}]