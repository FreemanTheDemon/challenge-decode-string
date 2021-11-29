// Write your code below this line
// >>> "1a" // "b"
// >>> "3ce" // "fh"
// >>> "2fcjjm" // "hello"

const decoder = (str) => {
    // define the entire alphabet
    let alpha = 'abcdefghijklmnopqrstuvwxyz';
    // create a result string to return later
    let result = '';
    // get the first character and convert it into a number (in base 10)
    let shift = parseInt(str, 10);
    // turn the shift number into a string so we can get the length
    // define the starting point of i this way
    let shiftString = shift + '';
    // loop over the input string, starting one after the start of the string
    for (let i = shiftString.length; i < str.length; i++) {
        // define a helper variable
        let currentChar = str[i];
        // define the new position by using indexOf and shifting it by the shift we defined earlier
        let charPos = alpha.indexOf(currentChar) + shift;
        // add the shifted character to the result string
        result += alpha[charPos];
    }
    // return the result after all is well
    return result;
}

console.log(decoder('1a')); // b
console.log(decoder('3ce')); // fh
console.log(decoder('-2fcjjm')); // dahhk
console.log(decoder('11ald')); // lwo