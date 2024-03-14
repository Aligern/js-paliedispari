
// Palindrome
// We ask the user to give us a word, then we need to create a function to see if it is palindrome

// here we ask the user the prompt we need:
let phrase = prompt("inserisci una parola");

// now we create the function to see if the word is palindrome or not:
function palindrome (word) {
    // we make sure to convert all the letters into lower cases to avoid any reading issues from the machine:
    word = word.toLowerCase();
    // we check the lenght of our word:
    const len = word.length;
    // now we split the word in 2 then compare the first half with the second one:
    for (let i = 0; i < len / 2; i++) {
        // we do a comparison between the two half of our word:
        if (word[i] !== word[len - 1 - i]) {
            // if at least one character is different from the first half of the word then the given word is not palindrome, so:
            return false;
        }
    }
    // when our if results in two identical halves then:
    return true;
};
console.log(palindrome(phrase));

// Odd or Even
// then the user choose odd or even and give us a number between 1 and 5.
// we generate a random number (always between 1 a 5) with another function.
// we sum the two numbers
// we need to check if the sum is odd or even with a function.
// then we print who the winner is.

// we ask the user to choose between even or odd:
let userEvenOrOdd = prompt("Scegli pari o dispari");
// now we ask him to pick a number between 1 and 5:
let userNumber = parseInt(prompt("inserisci un numero da 1 a 5"));



// this function determines if the number is even:
function isEven (number) {
    let isEven = number % 2 === 0;
    console.log(isEven);
    return isEven;
}


function playEvenOrOdd (userEvenOrOdd, userNumber) {
    // we generate the number for the machine:
    let randomNum = getRndInteger(1,5);
    console.log(randomNum, "scelta dell'IA");
    // here we do the sum between the user chosen number and the AI one:
    let sum = userNumber + randomNum;
    console.log(`la somma dei numeri è : ${sum}`);
    let sumEven = isEven(sum);

    // let's determine if who's the winner:
    let result;
    if (userEvenOrOdd === "pari" && sumEven || (userEvenOrOdd === "dispari" && !sumEven)) {
        result = "Complimenti! hai vinto!";
    }   else {
        result = "Spiacente, hai perso!";
    }
    return result;
};

// we check if the user give us the right prompts:

// first we make sure that the user use the proper input on the first one of the game by making him choise between even('pari') or odd('dispari'):
if (userEvenOrOdd !== "pari" && userEvenOrOdd !== "dispari") {
    console.log("La scelta non è valida. Per favore inserisci 'pari' o 'dispari'.");
    // now we check if the user puts a number between 1 and 5 and we also make sure that he puts a number by using 'isNaN':
} else if (userNumber < 1 || userNumber > 5 || isNaN(userNumber)) {
    console.log ("Numero non valido. Inserisci un numero fra 1 e 5.");
    // if the user give the right prompts we just show the game results by assigning to a variable our game function:
} else {
    let gameResult = playEvenOrOdd(userEvenOrOdd, userNumber);
    console.log(gameResult);
};


// this is our randomizer function:
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
};