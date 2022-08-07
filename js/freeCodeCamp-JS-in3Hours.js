console.log ("Hello from JS")
//I will primarily be working on understanding concatenate.
const sum = 10 + 10;
console.log(sum);

var myStr = "FirstLine\n\t\SecondLine\ \nThirdLine";
console.log(myStr);

//example
var ourStr = "I come first. " + "I come second.";

// Only change code below this line

var myStr = "FirstLine\nSecondLine\r\nThirdLine\nFourthLine\nFifthLine\r\nSixthLine";
console.log(myStr);

var myStr = `I am a \"double quoted\" string inside \"double quotes\".`;
console.log(myStr);

var myStr = `<a href="http://www.example.com" target="_blank">Link</a>`;
console.log(myStr);

var ourStr = "I come first. " + "I come second.";

// Only change code below this line

var myStr = "This is the start. " + "This is the end."
console.log(myStr);

var myStr = "This is the first sentence. "
myStr += "\nThis is the second sentence.";
console.log(myStr);

var myName = "Will";
var myStr = "My name is " + myName + " and I am well!";
console.log(myStr);

var someAdjective = "worthwhile.";
var myStr = "Learning to code is ";

myStr += someAdjective;
console.log(myStr);


var firstNameLength = 0;
var firstName = "Taz";

firstNameLength = firstName.length;
// Setup
var lastNameLength = 0;
var lastName = "Lovelace";
console.log(firstNameLength);

// Only change code below this line.

lastNameLength = lastName.length;

console.log(lastName);
console.log(lastNameLength);
console.log(ourStr)
// Setup

var firstLetterOfLastName = "";
var lastName = "Lovelace";
firstLetterOfLastName = lastName[0];
console.log(firstLetterOfLastName);


// Setup
var fourthLetterOfLastName = "";
var lastName = "Lovelace";
fourthLetterOfLastName = lastName[4];
console.log(fourthLetterOfLastName);

// Setup
var myStr = "Jello World";

// Only change code below this line - Immutability example

myStr = "Hello World";
console.log(myStr);

// Example
var firstName = "Adam";
var lastLetterOfLastName = firstName[1];

// Setup
var lastName = "Lovelace";
// Break
var thirdLetterOfLastName = lastName[2];
console.log(thirdLetterOfLastName);

var firstName = "Adam"
var lastLetterOfFirstName = firstName[firstName.length - 1];
console.log(lastLetterOfFirstName);

var firstName = "Adam"
var lastLetterOfFirstName = firstName[firstName.length - 1];
console.log(lastLetterOfFirstName);

// Care to play a game?

function wordBlanks(myNoun, myAdj, myVerb, myAdverb) {
    var result = "";
    result += "The " + myAdj + " " + myNoun + myVerb + " to the store " + myAdverb  
    return result;
}
console.log(wordBlanks("cat", "big", " ran", "quickly"));

function wordBlanks2(myNoun, myAdj, myVerb, myAdverb) {
    var result = "";
    result = "The " + myAdj + " " + myNoun + " is " + myVerb + " " + myAdverb + " to the place.";
    return result;
}
console.log(wordBlanks2("big", "man", "running", "quickly"));

// Just nailed this function with no assist.  Probably time for bed.

//Arrays with arrays in an array
var ourArray = ["John", 23, 46, ["marvel", 42], 78965, "William", "Adbignail", "Alonzo", "Tortez", ["lol", "kek", "LUL", "LOL", "LAWL"]];

var hisArray = ["Thomas", "Jet", "lames", "&", "Lamas"];

var Notanarrataski = ["dome", 7845, .093, -45, ["yellow", "green", "blue", "hazed", 123, 456, 789]];

var ourArray = [18,64,99];
ourArray[1] = 45;//ourArray now equals [18,45,99].

//Setup
var myArray = [18,64,99];

myArray[0] = 50; //myArray should now be [50,64,99]

console.log(myArray);
console.log(ourArray);

// Declare your variable here.
var myGlobal = 10;

function fun1() {
    // Assign 5 to oopsGlobal Here
}

function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}
fun1();
fun2();



