
// Palindrome
// We ask the user to give us a word, then we need to create a function to see if it is palindrome


// Odd or Even
// then the user choose odd or even and give us a number between 1 and 5.
// we generate a random number (always between 1 a 5) with another function.
// we sum the two numbers
// we need to check if the sum is odd or even with a function.
// then we print who the winner is.


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

