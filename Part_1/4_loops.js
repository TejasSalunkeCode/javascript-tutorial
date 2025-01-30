
//Loops 
console.log("Looping Statment")

// var num=1;
// while(num<=10){ 
//   console.log("5 * "+num+ " = "+ 5*num)   //While Loop
//   num++;
// }

// var num=1;
// do{
//     console.log("5 * "+num+ " = "+ 5*num)    //Do While Loop
//     num++;
//   }while(num<=10)

for(num=1;num<=10;num++){
    console.log("5 * "+num+ " = "+ 5*num)  //For Loop
}

//Check number is possitive or not 
// let userinput;
// let possitivenumber;
// do{
//  userinput=prompt("enter any possitive number")   //----->This should be run in Command Promat(Console)
//  possitivenumber=parseFloat(userinput)
// }while(isNaN(possitivenumber) || possitivenumber<0)
//     console.log("You entered a valid number ",possitivenumber)


//Number is prime or not
var n=13;
var isprime=true;
for(var i=2;i<num;i++){
    if(n%i==0){
        isprime=false;
    }
}
if(isprime){
    console.log("Number is Prime")
}
else{
    console.log("Number is Not Prime")  
}