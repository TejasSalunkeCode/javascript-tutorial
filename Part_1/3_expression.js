//Arithmatic operator
console.log("Arithmatic operator")
// a+b
// a-b
// a*b
// a/b
// a%b

var result = 55 / "hello"; //NaN(Not a Number)
console.log(result)

var res = 0.1 + 0.2; //it will provide 0.30000000000000004 at output , bcz it cnvrt floating point number to binary number
console.log(res)
console.log(res.toFixed(2))// this meathod gives 2 digit after point

//Boolean Operator
console.log("Boolean Operator")
console.log('5' == 5)
console.log('5' === 5)
console.log(5 != 5)//provide false
console.log(2 < 5)
console.log(2 > 5)

//Logical Operator
console.log("Logical Operator")
var x = 15;
var y = 10;
var isopened = false;
console.log(x > 8 && y < 5)
console.log(x > 8 || y < 5)
console.log(!(isopened))//Return true if operand is false, and false if the operand is true

//Ternary Opertor
console.log("Ternary Operator")
// syntax:
// condition ? expressionIfTrue : expressionIfFalse
let age = 16;
let resscheck = age >= 18 ? "yes" : "no";

var score = 78
let checkres = score > 40 ? "pass" : "fail";

console.log("5" - 3)
console.log(2 < 12 < 3)
console.log("5" + 3 + 3)

//If else Condition
console.log('if else--->')

let userage = 17;
let isCitizen = true;
let isRegistered = true;

if (userage >= 18) {
    if (isRegistered) {
        if (isCitizen) {
            console.log("you are eligable to vote")
        }
        else {
            console.log("you are not eligable to vote due to not having citizenship")
        }
    }
    else {
        console.log("you are not eligable to vote due to not registeration")
    }
}
else {
    console.log("you are not eligable to vote bcz you are younger")
}

//Switch Statment
console.log("Switch Statment")
var areaofShapes = "square";
var a = 5;
var b = 10;
var result_1;
switch (areaofShapes) {
    case "square":
        result_1 = a * a;
        console.log(result_1)
        break;

    case "rectangle":
        result_1 = a * b;
        console.log(result_1)
        break;

    case "circle":
        var r = 2;
        result_1 = 3.14 * (r * r);
        console.log(result_1)
        break;

    default:
        console.log("No shape matches")
}
