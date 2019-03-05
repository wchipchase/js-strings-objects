//  const printToDom = (divId, textToPrint) => {
//     const selectedDiv = document.getElementById(divId);
//     selectedDiv.innerHTML+= textToPrint
// };

// const iHaveADrinkdiv = document.getElementById('haveADrink');

// const iAmThursty = (num) => {
    //do some stuff
    // under 21? "Drink some water"
    // over 21 under 65 "Have a beer"
    // over 65 "take a nap"
//     if (num < 21) {
//         return "Drink some water";
//     }

//     else if (num < 65) {
//         return "Have a beer";
//     }

//     else {
//          return "Take a nap";
//     }
// };


// printToDom('thirsty', iAmThursty(55))
// printToDom('thirsty', iAmThursty(17))

// console.log('cats'.length);
// const quote = "Winter is coming"
// console.log(quote.indexOf('is'));


// const catName = ()  => {
//     return 'Killer';
// }

// const bucketOCats = {
//     cat1:'Fluffy',
//     cat2: 5,
//     cat3: catName,
//     cat4: {
//         water: 'nope',
//         sunlight: 'yep'
//     }
// }

// console.log(bucketOCats.cat2);

// console.log(bucketOCats['cat2']);

// console.log(bucketOCats.cat4.water)

// let hitchhikers_guide = {
//     characters: ["Zaphod", "Arthur", "Ford", "Trillian"],
//     catchphrase: "Don't Panic",
//     random_facts: {
//         copies_sold: 14000000,
//         formats: ["radio", "TV", "film", "graphic novel"],
//         ultimate_answer: {
//             meaning_of_life: 42
//         }
//     }
// };

// console.log(hitchhikers_guide.random_facts.ultimate_answer.meaning_of_life)

let employee = {
    name: "Jeff Winger",
    age: 37,
    department: "legal",
    hire_date: "09/22/2010",
    vacation_days: 20,
    eom : {
        employee_of_the_month: false
    }
  }

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += textToPrint;
}

  
const answer1 = 'Our company"s lawyer is ' + employee.name;
const answer2 =  'Jeff was hired on ' + employee['hire_date'];
const answer3 = 'Jeff has ' + employee.vacation_days + ' vacation days';
const answer4 = 'Jeff is eom? ' + employee.eom.employee_of_the_month;


printToDom('jeff', answer1)
printToDom('jeff', answer2)
printToDom('jeff', answer3)
printToDom('jeff', answer4)