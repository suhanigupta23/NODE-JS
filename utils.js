function generateRandomNumber(){
    return Math.floor(Math.random() * 100) +1;
    //number given between 1 to 100
}

function celsiusToFahrenheit(celcius){
    return (celcius *9)
 /5 +32;
}

module.exports = {
    generateRandomNumber,
    celsiusToFahrenheit,
};
//exported the function , now can be  imported anywhere