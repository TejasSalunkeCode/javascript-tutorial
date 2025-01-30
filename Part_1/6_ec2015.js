//Var KeyWord
if(true){
   var name="Tejas"
   console.log(name) 
}
name="Yash"
console.log(name) 

//Let KeyWord
// if(true){
//     let name2="Tejas"
//     console.log(name2) 
//  }
//  console.log(name2)       //It will through error bcz value Let keword have scope in the Curly braces


 //Constant KeyWord
// if(true){
//     const name3="Tejas"
//     name3="Yash"          //It will through error bcz value can`t change here
//     console.log(name3) 
//  }
//  console.log(name3)


//use of $
var fname= "Tejas "
var Lname= "Salunke"
// var res=fname+Lname;
var res=`${fname} ${Lname}`;
console.log(res)


var num=5
console.log(`5 * ${num} = ${5*num}`)

//Default Parameter
function sum(a,b=20){
    return a+b;
}
console.log(sum(5,25))


const result=(a,b) => {
     console.log(`the addition of ${a} and ${b} is ${a+b}`);
};
console.log(sum(5,25));

var a=6;
console.log(`The area of Square is ${a*a}`)   //Area of Square


