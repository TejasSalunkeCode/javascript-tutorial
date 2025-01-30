 let name="tejas";
 let age=19;
//  const person={name:"tejas",age:"19"}

 //traditional way
 const person={name,age}
 console.log(person)

 //Destructing Array
 const numers=[10,20,30]
 console.log(numers[0])

 const[first,second,third]=numers;
 console.log(first,second,third)

 //Swapping Array using  Destructing aq

//  let a=10
//  let b=20
// [a,b]=[b,a]
// console.log(a,b)


//Destructing Object
const user={name2:"tejas",age2:"19"}
let{age2,name2}=user;
console.log(age2,name2)


//spread Operator

//1.copying an array
let fruits=["apple","orange","mango"]
let newfruits=[...fruits]
console.log(newfruits)

//2 concating array
const num1=[1,2,3,4]
const num2=[4,5,6,7] 
const newnum=[...num1,...num2]
console.log(newnum)

//adding element
let fruit=["apple","orange","mango"]
// fruit.push("guava","grapes")
fruit.push(...["guava","grapes"])
console.log(fruit)

//
const coutry="india";
// console.log(coutry.split(""));
console.log([...coutry])

//with rest parameter
const sum=(...numbers2)=>{
    return numbers2.reduce((accum,curval)=>( 
        accum=accum+curval
    ),0);
};
console.log(sum(12,34,56,21,23))

// ** use(expomential)

let base=2;
let exponent=3;
// console.log(Math.pow(base,exponent))
console.log(base**exponent) 


//
const comName="KodiDire";
const paddedName=comName.padStart(16)
const paddedName2=comName.padEnd(14)
console.log(paddedName)
console.log(paddedName2,"$")


//object and spread operator
const obj1={a:10,b:20,c:90}
const obj2={c:60,e:40,v:40}
const newobj={...obj2,...obj1}
console.log(newobj)

//
const nestedarray=[1,[2,3,4],5]
console.log(nestedarray.flat())
console.log(nestedarray)

const nestedarray1=[1,[2,[3],4,5]]
console.log(nestedarray1.flat(2))
console.log(nestedarray1)

//
const flatmapp=["My name" ,"is tejas"," salunke"]
const newarr=flatmapp.flatMap((curval)=>
    curval.split(" ")
)
console.log(flatmapp)
console.log(newarr)

//entries , fromentries
const person2={name:"tejas",age:19}
const entries=Object.entries(person2)
console.log(person2)
console.log(entries)

const person3=Object.fromEntries(entries);
console.log(person3)

console.log(person2==person3)//object compare with their memory addresses


//trimstart
console.log("     Testing   ".trimStart())
console.log("     Testing".trimStart())
console.log("Testing   ".trimStart())

//trimend
console.log("     Testing   ".trimEnd())
console.log("     Testing".trimEnd())
console.log("Testing   ".trimEnd())

//
const maxnum=Number.MIN_SAFE_INTEGER;
console.log(maxnum)
const n=9007199254740991654999999999999999999999999999999;
const numB=BigInt(n);
console.log(typeof numB)

//nullsih operator ??
let favnum=0;
// userfavnum=favnum || 10;
userfavnum=favnum ?? 10;
console.log(userfavnum)