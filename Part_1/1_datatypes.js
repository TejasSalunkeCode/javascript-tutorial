//Number
var $age=56;
console.log($age)

//string
var myname='Tejas'
console.log(myname)

//Undefined
var collageName;
console.log(collageName)

//Null
var salary=null;
console.log(null)

//BigInt
var bigno=12345654321n;
console.log(bigno)

//Boolean
var israining=true;
console.log(israining)

var areyoumad=false;
console.log(areyoumad)


//Some Question
var num=56;
console.log(num) 
console.log(typeof(num) )

//type of null
var mynumber=null
console.log(typeof mynumber)  // it shows the datatype of mynumber=object , instead of null
console.log(typeof null)  

//number to string
var no=45;
console.log(typeof (no+"")) //converting number to string
console.log(typeof String(no))

//string to number
var str="45";
console.log(typeof +str) //converting string to number
console.log(typeof Number(str))

//True or False Condition :

//1. Truthy Values condition
  //true
  //any non empty string("hello")
  //any non zero number
  //arrays and object,even if they are not empty

//2. Falsy Values condition
  //false
  //0(zero)
  //an empty string(" ")
  //null
  //undefined
  //NaN(Not a Number)

  var myage=12;
if(myage){
    console.log("this is truthy value")
}else{
    console.log("this is falsy value")
}

//ParseInt and ParseFloat
const mystring="23"
console.log(parseInt(mystring))

const mystring_2="23.9"
console.log(parseInt(mystring_2))

const mystring_3="23.8"
console.log(parseFloat(mystring_3))

//Some Example of ParseInt and ParseFloat

console.log(parseInt("123"))
console.log(parseInt("   123   "))
console.log(parseInt("$123"))
console.log(parseInt("0123"))
console.log(parseInt("123,10"))

console.log(parseInt("xyz"))
console.log(parseInt("@#$"))
console.log(parseInt("-123"))

//Cocatentation and coercion

console.log(10+"20")
console.log(9-"20")
console.log("java"+"script")
console.log(""+"")
console.log(0+"") // it gives output zero but typeof zero is string 
console.log("vinod"-"thapa")
console.log(true+true)
console.log(true+false)
console.log(false+true)
console.log(false-true)