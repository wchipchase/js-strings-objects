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

// console.log(iAmThursty(55));
// console.log(iAmThursty(11));
// console.log(iAmThursty(65));
// console.log(iAmThursty(21));
// console.log(iAmThursty(35));

printToDom('thirsty', iAmThursty(55))
printToDom('thirsty', iAmThursty(17))
// iAmThursty(55);
// iAmThursty(30);
// iAmThursty(19)

// bonus = print to dom