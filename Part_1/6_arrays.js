//Array Decleration

//Meathod 1:  Empty array
let arr = [];
console.log(typeof arr)

//Meathod 2:  Using  array Keyword
let arr1 = new Array("red", "blue", "yellow");
console.log(arr1)

//Meathod 3: Commonly Used
let arr2 = ["apple", "mango", "banana"];
console.log(arr2[0])
console.log(arr2[1])
console.log(arr2[2])//Before Change
arr2[2] = "Orange"
console.log(arr2[2]) //after Change
// console.log(arr2)




//For Of loop
console.log("For Of loop")
let name = ["Ram", "Krishna", "Ganesh"];
for (let item of name) {
    console.log(item)
}


//For IN loop
console.log("For IN loop")
// let name1=["Ram","Krishna","Ganesh"];
// for(let item in name1){
// console.log(item)
// }

//For Each Meathod
console.log("For Each Meathod")
// let name2=["Ram","Krishna","Ganesh"];
// name2.forEach (function callback(currentitem,index,pri){  //Using Normal Function
//     // console.log(`${currentitem}  ${index}`);
//     console.log(pri);
// },);


let name2 = ["Ram", "Krishna", "Ganesh"];
name2.forEach((currentitem, index, pri) => {           //Using arrow Function
    console.log(`${currentitem}  ${index}`);
    // console.log(pri);
},);

// let name2=["Ram","Krishna","Ganesh"];
// const foreachmeth=name2.forEach((currentitem,index,pri)=>{           //Using arrow Function
//     return `${currentitem}  ${index}`;
// },);
// console.log(foreachmeth)  //It cant be work and this will work in map function---->this is diff betn map and forEcah


//Map Function
console.log("Map Function")
// let store=["apple","mango","banana"];
// store.map(function callback(cureIt,ind,arr2){                 //Using Normal Function
//     console.log(`${cureIt} ${ind}`)
// //  console.log(arr2)
// },);


// let store=["apple","mango","banana"];
// store.map((cureIt,ind,arr2)=>{                 //Using arrow Function
//     console.log(`${cureIt} ${ind}`)
// //  console.log(arr2)
// },);

let store = ["apple", "mango", "banana"];
const formap = store.map((cureIt, ind, arr2) => {                 //Using arrow Function
    return `${cureIt} ${ind}`;

},);
console.log(formap)
console.log(arr2)

//Map function and For each meathod syntax are same but what is difference between the ?
//-->Above example in map function using return it return outsid fucntion but , using for each meathod it cant  be possible 


//Multiply with 2
// let numbers=[2,3,4,5,6]
// numbers.forEach((currel)=>{
//    console.log(`${currel*2}`)
// },);

let numbers = [2, 3, 4, 5, 6]
numbers.map((currel) => {
    return `${currel * 2}`;
},);


//array Meatods
// Push
console.log("Push Meathod")
let fruitslist = ["apple", "mango", "banana"];
console.log(fruitslist.push("Grapes"))
console.log(fruitslist)

// Push
console.log("pop Meathod")
console.log(fruitslist.pop())
console.log(fruitslist)


// unshift
console.log("unshift Meathod")
console.log(fruitslist.unshift("grapes"))
console.log(fruitslist)


// shift
console.log("shift Meathod")
console.log(fruitslist.shift())
console.log(fruitslist)

//splice Meathod
console.log("Splice Meathod")
console.log(fruitslist.splice(3, 0, "Grapes", "Tomato")) //All in one
console.log(fruitslist)

//indexof and lastindexof
console.log("indexof and lastindexof")
let num = [1, 2, 3, 4, 6, 5, 6, 7, 8, 9]
console.log(num.indexOf(6))
console.log(num.indexOf(6, 5))

console.log(num.lastIndexOf(6))
console.log(num.lastIndexOf(6, 8))

//Includes Meathod
console.log(num.includes(5)) //It return Boolean Value

//Add dec at End
console.log("Add dec at End")
let month = ["jan", "feb", "marh", "april", "may", "june", "nov"]
// console.log(month.sort())
console.log(month.splice(month.length, 0, "dec"))
console.log(month)

//update marh to march
console.log(month.splice(2, 1, "march"))
console.log(month)

//delete june from array
console.log(month.splice(5, 1))
console.log(month)


//Most Important Meathod in Array
// 1.Find
// 2.Findindex
// 3.filter

//1.Find Meathod
// console.log("Find Meathod")
// let numb=[1,2,3,4,5,6,7,8,9];
// let ress=numb.find((currntele,ind)=>{
//     return currntele>5;
// },);
// console.log(ress)

// 2.Findindex Meathod
// const resul=console.log("FindIndex Meathod")
// let numb=[1,2,3,4,5,6,7,8,9];
// let ress=numb.findIndex((currntele)=>{
//     return currntele>3;
// },);
// console.log(ress)

// 3.filter Meathod
const resul = console.log("Filter Meathod")
let numb = [1, 2,  8, 3, 4, 5, 6, 7, 8, 9];
let ress = numb.filter((currntele) => {
    return currntele > 3;
},);
console.log(ress)

//Interview Question :
let product = [
{ name: "laptop", price: 12000 },
{ name: "phone", price: 5000 },
{ name: "tablet", price: 2500 },
{ name: "smartwatch", price: 800 }
]


// const returnfilter=product.filter((value)=>{
//     console.log(product)
// return value.price>=1000
// },);
// console.log(returnfilter)


const returnfilter=product.filter(function callback(value){
    console.log(product)
return value.price>=1000
},);
console.log(returnfilter)


//Filter unique value
console.log("Unique value")
let numbe = [1, 2,  8, 3, 4, 5, 6, 7, 8, 9];
const disp=numbe.filter((curele,indx,arrr)=>{
 return arrr.indexOf(curele)==indx;
},);
console.log(disp)
// console.log([new Set(numbe)]) //This is a very simple meathod

//sort meathod
let numbe2 = [1, 2,  8, 3, 4, 5, 6, 7, 8, 9];
const finalres=numbe2.sort((a,b)=>{
    if (a>b){
        return -1
    }
   else if(a<b){
        return 1
    }
},);
console.log(finalres)

//1 Interview question touppercase
let words=["apple","chess","cherry","tea","time"]
const show=words.map((curret_item,indxx,ary)=>{
  return curret_item.toUpperCase();
},);
console.log(show)



//2 Interview question square of even number
let numbers_3=[1,2,3,4,5,6,7,8,9];
const res_even=numbers_3.map((curr_item)=>{
     if(curr_item%2==0){
        return curr_item*curr_item;
     }
},).filter((curr_item)=>curr_item!=undefined);
console.log(res_even)