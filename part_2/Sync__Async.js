//Synchronous
const func2=()=>{
    console.log("Hello World from 2")
}
const fun1=()=>{
    console.log("Hello world from function 1")
    func2();
    console.log("hello after function 2")
}
fun1();

//ASynchronous
const func_2=()=>{
    setTimeout(()=>{

        console.log("Hello World from 2")
    },2000)

}
const fun_1=()=>{
    console.log("Hello world from function 1")
    func_2();
    console.log("hello after function 2")
}
fun_1();
