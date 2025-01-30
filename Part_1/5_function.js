var a,b;
function add(a,b){
    return a+b;
}

console.log(add(5,10))
console.log(add(50,100))
console.log(add(15,20))


function greet(){
    console.log("Hello Tejas...!")
}
greet();


function gree(name){
    console.log("Hello "+name+" how are you")
}
gree('ram');

var result=function add(a,b){
    return a+b;
}

console.log(result(5,10))



//Calulator
const calculator=(num1,num2,operator)=>{
    switch(operator){
        case "+":
            return num1+num2;

            case "-":
            return num1-num2;

            case "*":
            return num1*num2;

            case "/":
            return num1/num2;

            default:
                console.log("Invalid Operator")
        }
    }
console.log(calculator(10,2,"+"));
console.log(calculator(10,2,"-"));
console.log(calculator(10,2,"*"));
console.log(calculator(10,2,"/"));


//Reverse String  or  Palindrome or not

const isreverse=(str)=>
{ 
    let rev="";
    for(i=str.length-1;i>=0;i--){
         rev=rev+str[i];
    }
    // return rev;

    if(str==rev){
        return "String is Palindrome";
    }
    else{
        return "String is Not Palindrome";
    }
}
console.log(isreverse("level"))




