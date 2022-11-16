function setAlarm(employed, vacation){
    return (employed && !vacation);
}


console.log(setAlarm(true, true));