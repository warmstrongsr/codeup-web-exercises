// // console.log ("Hello from JS")
// // // //I will primarily be working on understanding concatenate.
// // //
// // // // const  summer = 10 + 10;
// // //
// // // const  summer = 10 + 10;
// // //
// // // console.log(summer);
// // // let myStr1 = "FirstLine\n\t\ SecondLine\ \nThirdLine";
// // // console.log(myStr1);
// // //
// // // //example
// // // var ourStr = "I come first. " + "I come second.";
// // //
// // // // Only change code below this line
// // //
// // // myStr = "FirstLine\nSecondLine\r\nThirdLine\nFourthLine\nFifthLine\r\nSixthLine";
// // // console.log(myStr);
// // //
// // // myStr = `I am a \"double quoted\" string inside \"double quotes\".`;
// // // console.log(myStr);
// // //
// // // myStr = `<a href="http://www.example.com" target="_blank">Link</a>`;
// // // console.log(myStr);
// // //
// // // var ourStr = "I come first. " + "I come second.";
// // //
// // // // Only change code below this line
// // //
// // // var myStr = "This is the start. " + "This is the end."
// // // console.log(myStr);
// // //
// // // myStr = "This is the first sentence. ";
// // // myStr += "\nThis is the second sentence.";
// // // console.log(myStr);
// // //
// // // var myName = "Will";
// // // myStr = "My name is " + myName + " and I am well!";
// // // console.log(myStr);
// // //
// // // var someAdjective = "worthwhile.";
// // // myStr = "Learning to code is ";
// // //
// // // myStr += someAdjective;
// // // console.log(myStr);
// // //
// // //
// // // var firstNameLength = 0;
// // // var firstName = "Taz";
// // //
// // // firstNameLength = firstName.length;
// // // // Setup
// // // var lastNameLength = 0;
// // // var lastName = "Lovelace";
// // // console.log(firstNameLength);
// // //
// // // // Only change code below this line.
// // //
// // // lastNameLength = lastName.length;
// // //
// // // console.log(lastName);
// // // console.log(lastNameLength);
// // // console.log(ourStr)
// // // // Setup
// // //
// // // var firstLetterOfLastName = "";
// // // var lastName = "Lovelace";
// // // firstLetterOfLastName = lastName[0];
// // // console.log(firstLetterOfLastName);
// // //
// // //
// // // // Setup
// // // var fourthLetterOfLastName = "";
// // // var lastName = "Lovelace";
// // // fourthLetterOfLastName = lastName[4];
// // // console.log(fourthLetterOfLastName);
// // //
// // // // Setup
// // // myStr = "Jello World";
// // //
// // // // Only change code below this line - Immutability example
// // //
// // // myStr = "Hello World";
// // // console.log(myStr);
// // //
// // // // Example
// // // var firstName = "Adam";
// // // var lastLetterOfLastName = firstName[1];
// // //
// // // // Setup
// // // var lastName = "Lovelace";
// // // // Break
// // // var thirdLetterOfLastName = lastName[2];
// // // console.log(thirdLetterOfLastName);
// // //
// // // var firstName = "Adam"
// // // var lastLetterOfFirstName = firstName[firstName.length - 1];
// // // console.log(lastLetterOfFirstName);
// // //
// // // var firstName = "Adam"
// // // var lastLetterOfFirstName = firstName[firstName.length - 1];
// // // console.log(lastLetterOfFirstName);
// // //
// // // // Care to play a game?
// // //
// // // function wordBlanks(myNoun, myAdj, myVerb, myAdverb) {
// // //     var result = "";
// // //
// // //     result += "The " + myAdj + " " + myNoun + myVerb + " to the store " + myAdverb
// // //
// // //     result += "The " + myAdj + " " + myNoun + myVerb + " to the store " + myAdverb
// // //
// // //     return result;
// // // }
// // // console.log(wordBlanks("cat", "big", " ran", "quickly"));
// // //
// // // function wordBlanks2(myNoun, myAdj, myVerb, myAdverb) {
// // //     var result = "";
// // //     result = "The " + myAdj + " " + myNoun + " is " + myVerb + " " + myAdverb + " to the place.";
// // //     return result;
// // // }
// // // console.log(wordBlanks2("big", "man", "running", "quickly"));
// // //
// // // // Just nailed this function with no assist.  Probably time for bed.
// // //
// // // //Arrays with arrays in an array
// // // var ourArray = ["John", 23, 46, ["marvel", 42], 78965, "William", "Adbignail", "Alonzo", "Tortez", ["lol", "kek", "LUL", "LOL", "LAWL"]];
// // //
// // // var hisArray = ["Thomas", "Jet", "lames", "&", "Lamas"];
// // //
// // // var Notanarrataski = ["dome", 7845, .093, -45, ["yellow", "green", "blue", "hazed", 123, 456, 789]];
// // //
// // // var ourArray = [18,64,99];
// // // ourArray[1] = 45;//ourArray now equals [18,45,99].
// // //
// // // //Setup
// // // var myArray = [18,64,99];
// // //
// // // myArray[0] = 50; //myArray should now be [50,64,99]
// // //
// // // console.log(myArray);
// // // console.log(ourArray);
// // //
// // // // Declare your variable here.
// // // var myGlobal = 10;
// // //
// // // function fun1() {
// // //     // Assign 5 to oopsGlobal Here
// // // }
// // //
// // // function fun2() {
// // //     var output = "";
// // //     if (typeof myGlobal != "undefined") {
// // //         output += "myGlobal: " + myGlobal;
// // //     }
// // //     if (typeof oopsGlobal != "undefined") {
// // //         output += " oopsGlobal: " + oopsGlobal;
// // //     }
// // //     console.log(output);
// // // }
// // // fun1();
// // // fun2();
// // //
// // // function ourReusableFunction() {
// // //     console.log("HeLlO WoRlD");
// // // }
// // // ourReusableFunction();
// // //
// // // function reusableFunction() {
// // //     console.log("Hi World");
// // // }
// // // reusableFunction();
// // //
// // // //Example
// // //
// // // function ourFunctionWithArgs(alpha, bravo) {
// // //     console.log(alpha + bravo);
// // // }
// // // ourFunctionWithArgs(10, 5);
// // //
// // // function functionWithArguments(a, b, c, d, e, fg){
// // //     console.log(a + b  * c + d % e / fg);
// // // }
// // // functionWithArguments(10, 100, 1, 2, 5, 1);
// // // // self break
// // //
// // // function alphaFunction(alpha, bravo, charlie, delta) {
// // //     console.log((alpha + bravo + charlie) / delta);
// // // }
// // // alphaFunction(1, 2, 3, 4);
// // //
// // // //One more blind to test concepts
// // //
// // // function bravoFunction(a,b,c,d,e,f,g) {
// // //     console.log(a+b+c+d+e+f+g);
// // // }
// // // bravoFunction(10,10,10,10,10,10,10); //nailed it! moving on...
// // //
// // // var a = "I come first";
// // // var b = " and I come second.";
// // //
// // // console.log(a + b);
// // //
// // // console.log(a + b);
// // //
// // //
// // // function areaFucntion(c, d, e, f, a, b, c) {
// // //     console.log((a + b + c) / d * 2 - 10 + e * f);
// // // }
// // // areaFucntion(1,2,2,2,2,2,10); //based on Order of Ops the correct answer logs 8
// // //
// // // // Break ******************* Break
// // //
// // // var myGlobal = 10;
// // //
// // // function fun1() {
// // //     oopsGlobal = 5;
// // //     // Assign 5 to oopsGlobal Here
// // // }
// // //
// // // function fun2() {
// // //     var output = "";
// // //     if (typeof myGlobal != "") {
// // //         output += "myGlobal: " + myGlobal;
// // //     }
// // //     if (typeof oopsGlobal != "undefined") {
// // //         output += " oopsGlobal: " + oopsGlobal;
// // //     }
// // //     console.log(output);
// // // }
// // // fun1();
// // // fun2();
// // //
// // // function myLocalScope() {
// // //     var myVar = 5;
// // //     console.log(myVar);
// // // }
// // // myLocalScope();
// // //
// // // // console.log(myVar); //error my var is not defined b/c its locally in the function
// // //
// // // var outerWear = "T-Shirt";
// // //
// // // function myOutfit() {
// // //     var outerWear = "sweater";
// // //     return outerWear;
// // // }
// // // console.log(myOutfit());
// // // console.log(outerWear);
// // //
// // // function minusSeven(num) {
// // //     return num - 7;
// // // }
// // //
// // // console.log(minusSeven(10));
// // //
// // // function timesFive(num){
// // //     return num * 5;
// // // }
// // // console.log(timesFive(5));
// // //
// // // //example
// // // var sum = 0;
// // // function addThree() {
// // //     sum = sum + 3;
// // // }
// // // console.log(addThree());
// // //
// // // function addFive() {
// // //     sum += 5;
// // // }
// // // console.log(addFive());
// // //
// // // //Stand in line
// // //
// // // function nextInLine(arr, item) {
// // //     arr.push(item);
// // //     return arr.shift;
// // // }
// // //
// // // var testArr = [1,2,3,4,5];
// // //
// // // console.log("Before: " + JSON.stringify(testArr));
// // // console.log(nextInLine(testArr,6));
// // // console.log("After: " + JSON.stringify(testArr));
// // //
// // //
// // // function nextInLine(arr, item) {
// // //     arr.push(item);
// // //     return arr.shift();
// // // }
// // //
// // // var testArr = [1,2,3,4,5];
// // //
// // // console.log("Before: " + JSON.stringify(testArr));
// // // console.log(nextInLine(testArr, 6));
// // // console.log("After: " + JSON.stringify(testArr));
// // //
// // //
// // // // const fruits = ["Banana", "Orange", "Apple", "Mango"];
// // // // fruits.push("Kiwi", "Lemon");
// // // // fruits.pop();
// // // // console.log('fruits: ', fruits);
// // //
// // // // const fruits = ["Banana", "Orange", "Apple", "Mango"];
// // // // console.log(fruits);
// // // // fruits.pop();
// // // // console.log(fruits);
// // // // fruits.push('Cherry, Peaches, Tangerine');
// // // // console.log(fruits);
// // // // console.log('fruits: ', fruits);
// // // // console.log("fruits: ", fruits);
// // //
// // //
// // // var fruits = ["Banana", "Orange", "Apple", "Mango"];
// // // fruits.unshift("Lemon","Pineapple");
// // // console.log("fruits: ", fruits);
// // //
// // // let pizzaPreference = prompt("What kind of pizza do you like?");
// // //
// // // if (pizzaPreference === "pineapple and hot sauce") {
// // //     alert("What a coincidence, that's my favorite!");
// // // } else if (pizzaPreference === "cheese") {
// // //     alert("Just plain cheese? Okay...");
// // // } else {
// // //     alert(pizzaPreference + " isn't my favorite, but let's order some!");
// // // }
// // //
// // // let t = "1" + "2";
// // // console.log(t);
// // //
// // //
// // // let apple = "1" + "2";
// // // console.log(apple);
// // //
// // // const fruitss = ["Banana", "Orange", "Apple", "Mango"];
// // // fruitss.unshift("Lemon","Pineapple");
// // // console.log("fruits: ", fruitss);
// // //
// // // Math.E
// // // console.log(Math.E);
// // // console.log(Math.PI)
// // // console.log(Math.SQRT1_2)
// // // console.log(Math.random)
// // // console.log(Math.floor)
// // // console.log(Math.ceil)
// // // console.log(Math.pow)
// // // console.log(Math.random)
// // // console.log(Math.random)
// // //
// // //
// // //
// // //
// //
// // TESTS
// //********************************************************************************************************************//
// testRunner();
// function testRunner() {
//     console.log("Passed 'returns valid mileage': " + getCarTelemetry_GivenValidCar_ReturnsMileage());
//     console.log("Passed 'returns string message': " + getCarTelemetry_GivenUndefinedMileage_ReturnsStringMessage());
//     console.log("Passed 'return string message for non-numeric': " + getCarTelemetry_GivenNonnumeric_ReturnsStringMessage());
//     console.log("Passed 'returns string message for boolean': " + getCarTelemetry_GivenNonnumericalBoolean_ReturnsStringMessage());
//     // TODO: 2. place logging statement for decimal test here
// }
//
// // AC-1: given a valid car, returns the mileage of that car
// function getCarTelemetry_GivenValidCar_ReturnsMileage() {
//     // Arrange
//     // Gather all the data, and any setup needed
//     const car = {
//         mileage: 67922
//     }
//
//     const expectedMileage = 67922;
//
//     // Act
//     // Execute testable code and store results as needed
//     const actualMileage = getCarTelemetry(car);
//
//     // Assert
//     // Test the actual output of code against the expected output
//     return actualMileage === expectedMileage;
// }
//
// // AC-2: given no mileage, returns a helpful message
// function getCarTelemetry_GivenUndefinedMileage_ReturnsStringMessage() {
//     // Arrange
//     const car = {}
//     // Act
//     // Execute testable code and store results as needed
//     const message = getCarTelemetry(car);
//
//     // Assert
//     // Test the actual output of code against the expected output
//     return typeof message === "string";
// }
//
// // AC-3: given any non-valid mileage (numbers and numerical strings are valid), returns a helpful message
// function getCarTelemetry_GivenNonnumerical_ReturnsStringMessage(){
//     // Arrange
//     const car = {
//         mileage: "how now brown cow"
//     }
//     // Act
//     // Execute testable code and store results as needed
//     const message = getCarTelemetry(car);
//
//     // Assert
//     // Test the actual output of code against the expected output
//     return message === "No mileage provided...";
// }
// function getCarTelemetry_GivenNonnumericalBoolean_ReturnsStringMessage(){
//     // Arrange
//     const car = {
//         mileage: true
//     }
//     // Act
//     // Execute testable code and store results as needed
//     const message = getCarTelemetry(car);
//
//     // Assert
//     // Test the actual output of code against the expected output
//     return message === "No mileage provided...";
// }
//
// // AC-4: given a numeric with more than one decimal place, returns mileage with only one decimal place (ie: 6853.5234 -> 6853.5)
// // TODO: 1. write test for decimal place here
//
// // ACTUAL CODE
// function getCarTelemetry(carObj) {
//     // TODO: 3. modify code for decimal place handling here
//     return parseInt(carObj.mileage) ? carObj.mileage : "No mileage provided...";
//
//
    function FairPlay(truthOrDarn) {
        if (truthOrDarn) {
            return "Yes, that was true.";
        }
        return "No, it was not true.";
    }
    console.log(FairPlay(89));


onst names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
    // Only change code below this line
    if(strokes == 1) {
        return names[0]
    } else if (strokes <= par - 2) {
        return names[1]
    } else if (strokes == par - 1) {
        return names[2]
    } else if (strokes == par) {
        return names[3]
    } else if (strokes == par + 1) {
        return names[4]
    } else if (strokes == par + 2) {
        return names[5]
    } else (strokes >= par + 3); {
        return names[6]
    }

var testArr = [1,2,3,4,5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr,6));
console.log("After: " + JSON.stringify(testArr));


function nextInLine(arr, item) {
    arr.push(item);
    return arr.shift();
}

golfScore(5, 4);