function isANumber(input) {
    if (typeof input === "number") {
        return true; {
        } else {
            return false;
        }
    }

    function increment(input) {
        if (typeof input === "number")
            return ++input;
    }
    return isANumber(input);
}
  function decrement(input) {
        if (typeof input === "number")
            return --input;
    }
    return isANumber(input);
}

function decrement(input){
    if (typeof input === "number"{
        // return = input - 1;
        return input -= 1;
    })
}

function getHighestNumber(n1, n2, n3) {
    if (!isNaN(Number(n1)) && !isNaN(Number(n2)) && !isNaN(Number)(n3))) {
        
        return Math.max(n1, n2, n3);

    } else {
        return false;
    }
}

function parseNumber(input) {
    return Number(input);
}
function parseNumber(input) {
    return parseFloat(input);
}

function add(n1, n2) {
    if (!isANumber(n1) && !isANumber(n2)) {
        
    }
    return isANumber(n1) && isANumber(num2);
}

function add(n1, n2) {
    if (isNaN(parseFloat(n1)) || isNaN(parseFloat(n2)){
        return false;
    }
    return Number(n1) + Number(n2);
}

function multiply(n1, n1) {
    if (isNaN(parseFloat(n1)) || isNaN(parseFloat(n2)){
        return false;
    }
    return Number(n1) + Number(n2);
    )
}

function square(input) {
    if (isNaN(parseFloat(input))) {
        return false;
    }
    return input * input;
}

function sumofSquares(n1, n2) {
    if (isNaN(parseFloat(n1)) || isNaN(parseFloat(n2))) {
        return false;
    }
    return add(square(num1), square(num2));
}

function isPalindrome(input) {

    if (typeof input !== "string") {
        return false;
    }


    let inputToLowerCase = "";

    inputToLowerCase = input.toLowerCase();

    let inputAsArray = inputToLowerCase.split("");
    let inputOriginalAsArray = inputsArray;

    for (let i = 0; i < inputsAsArray.length; i++){

        if (inputOriginalArray[i] !== inputAsArray[i]) {
            return false;
        }
    }
    
    




}