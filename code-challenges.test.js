// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// const { describe } = require("yargs")
// I hate yargs sometimes 

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// the function should take vowels and turn them into numbers so it looks like its the 90's and you just learned how to type 
// the test will equal the expected output 
// the input word strings should only have the vowels changed and everything else should remain the same 

// a) Create a test with expect statements using the variables provided.

describe("codedMsg", () => {
    it("takes in a string and returns a coded message that converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0", () => {
        const secretCodeWord1 = "Lackadaisical"
        // Expected output: "L4ck4d41s1c4l"
        const secretCodeWord2 = "Gobbledygook"
        // Expected output: "G0bbl3dyg00k"
        const secretCodeWord3 = "Eccentric"
        // Expected output: "3cc3ntr1c"

expect(codedMsg(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
expect(codedMsg(secretCodeWord2)).toEqual("G0bbl3dyg00k")
expect(codedMsg(secretCodeWord3)).toEqual("3cc3ntr1c")
     })
})

// I got RED 
//  ● codedMsg › takes in a string and returns a coded message that converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0
// ReferenceError: codedMsg is not defined

// b) Create the function that makes the test pass.

// use the .replace() method to replace the vowels with numbers 
    // use the toLowerCase() to go around the first letter being capitalized 
        // keep getting errors when added to the string parameter  
        // I can get the vowels to be replaced but not the capitalized vowels     


const secretCodeWord1 = "Lackadaisical"
//  Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook"
//  Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"

const codedMsg = (string) => {
    return string.replace(/a/g,'4').replace(/e/g,'3').replace(/i/g,'1').replace(/o/g,'0')
}
// console.log(codedMsg(secretCodeWord1))
// console.log(codedMsg(secretCodeWord2))
// console.log(codedMsg(secretCodeWord3))

// I got RED, again 

// ● codedMsg › takes in a string and returns a coded message that converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0
// expect(received).toEqual(expected) // deep equality
// Expected: "3cc3ntr1c"
// Received: "Ecc3ntr1c"
//   28 | expect(codedMsg(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
//   29 | expect(codedMsg(secretCodeWord2)).toEqual("G0bbl3dyg00k")
// > 30 | expect(codedMsg(secretCodeWord3)).toEqual("3cc3ntr1c")


// --------------------2) Create a function that takes in an array of words and a single letter and returns all the words that contain that particular letter.

// a) Create a test with expects statement using the variable provided.

// similar to the ruby challenge 
// the letter should be in each of the words returned 
// find a way around the capitalization problem 
    // use the .toLowerCase() to get each letter of the word as a lower case word without permanently changing the word 

describe ("keyL", () => {
    it ("takes in an array of words and a single letter and returns all the words that contain that particular letter", () => {
        const arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
        const letterA = "a"
        const arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
        const letterE = "e"
    expect(keyL(arrayOfWords1, letterA)).toEqual(["Apple", "Banana", "Orange"])
    expect(keyL(arrayOfWords2, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
    })
})

// Expected output: ["Apple", "Banana", "Orange"]
// Expected output: ["Cherry", "Blueberry", "Peach"]

// I got RED 
//  ● keyL › takes in an array of words and a single letter and returns all the words that contain that particular letter
// ReferenceError: keyL is not defined

// b) Create the function that makes the test pass.

const keyL = (array, string) => array.filter(value => value.toLowerCase().includes(string))

// I got GREEN
// PASS  ./code-challenges.test.js
// keyL
//   ✓ takes in an array of words and a single letter and returns all the words that contain that particular letter (3 ms)


// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// find the sequence of numbers that will equal to a full house
// the answer should be a boolean 

// a) Create a test with expect statements using the variable provided.

describe("fullHouse", () => {
    it("determines whether or not the array is a full house", () => {
        const hand1 = [5, 5, 5, 3, 3]
        // Expected output: true
        const hand2 = [5, 5, 3, 3, 4]
        // Expected output: false
        const hand3 = [5, 5, 5, 5, 4]
        // Expected output: false

    expect(fullHouse(hand1)).toEqual(true)
    expect(fullHouse(hand2)).toEqual(false)
    expect(fullHouse(hand3)).toEqual(false)
    })
})

// I got RED 
// ● fullHouse › determines whether or not the array is a full house
// ReferenceError: fullHouse is not defined


// b) Create the function that makes the test pass.

// I can get the code to work if the numbers are already in order at the index, but if they are randomized, then the code does not work  
// add as much info to get around the index order problem
// make a conditional and make sure all the array values are included

const fullHouse = (array) => {
    if (array[0] === array[1,2] && array[3] === array[4] || 
        array[0] === array[2,3] && array[1] === array[4] ||
        array[0] === array[3,4] && array[1] === array[2]) {
        return true
    }  else {
        return false
    }
 }

// I got GREEN
// PASS  ./code-challenges.test.js
//  fullHouse
//     ✓  determines whether or not the array is a full house