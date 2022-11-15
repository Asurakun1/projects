function convertToRoman(num) {
    let numeral = "";
    let data = {
        M : 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };

    while(num > 0){
        switch(true){

            case num >= data.M:
                num -= data.M;
                numeral = numeral +"M";
                break;

            case num >= data.CM:
                num -= data.CM;
                numeral = numeral +"CM";
                break;

            case num >= data.D:
                num -= data.D;
                numeral = numeral +"D";
                break;

            case num >= data.CD:
                num -= data.CD;
                numeral = numeral +"CD";
                break;

            case num >= data.C:
                num -= data.C;
                numeral = numeral +"C";
                break;

            case num >= data.XC:
                num -= data.XC;
                numeral = numeral +"XC";
                break;

            case num >= data.L:
                num -= data.L;
                numeral = numeral +"L";
                break;

            case num >= data.XL:
                num -= data.XL;
                numeral = numeral +"XL";
                break;

            case num >= data.X:
                num -= data.X;
                numeral = numeral +"X";
                break;

            case num >= data.IX:
                num -= data.IX;
                numeral = numeral +"IX";
                break;

            case num >= data.V:
                num -= data.V;
                numeral = numeral + "V";
                break;

            case num >= data.IV:
                num -= data.IV;
                numeral = numeral + "IV";
                break;

            case num >= data.I:
                num -= data.I;
                numeral = numeral + "I";
                break;
        }
    }

    return numeral;
}
console.log(convertToRoman(29));

//Expected output: XXXVI