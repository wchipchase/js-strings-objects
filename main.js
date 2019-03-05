 const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML+= textToPrint
};

const iHaveADrinkdiv = document.getElementById('haveADrink');

const iAmThursty = (num) => {
    //do some stuff
    // under 21? "Drink some water"
    // over 21 under 65 "Have a beer"
    // over 65 "take a nap"
    if (num < 21) {
        return "Drink some water";
    }

    else if (num < 65) {
        return "Have a beer";
    }

    else {
         return "Take a nap";
    }
};


printToDom('thirsty', iAmThursty(55))
printToDom('thirsty', iAmThursty(17))

console.log('cats'.length);
const quote = "Winter is coming"
console.log(quote.indexOf('is'));