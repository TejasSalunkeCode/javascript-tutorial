//CallBack Function

function sayhello(name){
    return "Hello "+name
}
const greetfunction=sayhello;
console.log(greetfunction("Tejas"))

//higher order Function
function processuserInput(name,greetuser){
    console.log("Recived Input :"+name)
    greetuser(name);
}
function greetuser(name){
    console.log(`Hello ${name}`);

}
processuserInput("Tejas",greetuser);


//question

const mathoperation=(a,b,operation)=>{
   return operation(a,b)
};
const add=(a,b)=>{
    return a+b;
}
const sub=(a,b)=>{
    return a-b;
}
console.log(mathoperation(10,5,add))
console.log(mathoperation(10,5,sub))

//Callback hell
const getstudent=()=>{
 setTimeout(()=>{
    console.log("My name is Tejas")
    setTimeout(()=>{
        console.log("My Father name is Arvind")
        setTimeout(()=>{
            console.log("My sirname name is Salunke")
        },1000)
    },1000)
 },1000)
}
getstudent();