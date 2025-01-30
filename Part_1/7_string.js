let str="Tejas"
console.log(str.length)
let str_1="Hello i am \"Tejas\" & i am a 'Full stack Developer'";
console.log(str_1)

let str_2="Tejas Salunke";
let strarr=Array.from(str_2);
console.log(strarr);
const result=strarr.map((currentvalue,index)=>{
    return `${currentvalue} ${index}`;
},);
console.log(result)
// console.log(str_2.indexOf("Tejas"))

let statement="welcome javascript,world best javascript";
console.log(statement.indexOf("javascript"))//ForWord Search
console.log(statement.lastIndexOf("javascript"))//BackWord Search

//Search meathod
console.log(statement.search(/Javascript/))//-1 bcz case sensitive property
console.log(statement.search(/Javascript/i))//here remove case sensitive

//Match Meathod
console.log(statement.match("javascript"))

//MatchAll Meathod
let showres=statement.matchAll("javascript");
// console.log(...showres)  //acces iterator operator

for(item of showres){
console.log(item[0])
}


//include meathod
console.log(statement.includes("java"))


//Startwith meathod
console.log(statement.startsWith("wel"))
console.log(statement.startsWith("wel",12))

//Endwith meathod
console.log(statement.endsWith("javascript"))
console.log(statement.startsWith("java",23))

//Extract Subtring Part

//slice meathod
console.log(statement.slice(7))
console.log(statement.slice(7,16))

//substring meathod
let shw=statement.substring(-7)
console.log(shw)

//at meathod
console.log(statement.at(-7))

//replace meathod
console.log(statement.replace("javascript","tejas"))

//replaceAll meathod
console.log(statement.replaceAll("javascript","tejas"))



//Extract Subtring Character

//charAt meathod
console.log(statement.charAt(8))

//charCode meathod
console.log(statement.charCodeAt(8))

//trim meathod
let str_3="  hello world  ";
console.log(str_3)
console.log(str_3.length)
console.log(str_3.trim())
console.log(str_3.length);

//Split meathod
const strr="apple,banana,grapes";
let strArr=strr.split(",").reverse().join();
console.log(strArr)

//print A to Z
for(let char=97;char<=122;char++){
    console.log(String.fromCharCode(char))
}

// //find vowel present or not
// const findvowelspresentornot=(str)=>{
//     var vowel="aeiou"
//     for(item of vowel){

//         if(!str.includes(item)){
//             return false
//         }
//     }
//         return true
// }
// console.log(findvowelspresentornot("hello i am tejas salunke"));

//count vowel present in string
const findvowelspresentornot=(str)=>{
    var vowel="aeiou"
   let coununt=0
    for(item of str){

        if(vowel.includes(item)){
             coununt ++
        }
    }
        return coununt
}
console.log(findvowelspresentornot("hello i am tejas salunke"));

//pangram checker
// console.log("pangram checker")
// const pangramchecker=(stri)=>{
//   let inputarr=stri
//   console.log(inputarr)
// }