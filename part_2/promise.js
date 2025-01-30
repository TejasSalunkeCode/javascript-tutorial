const pr=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("hello we miss youu")
    }, 1000);
})
pr.then((res)=>{
    console.log(res)
}).catch((error)=>{
    console.log(error)
}).finally(()=>{
    console.log("Dont worry")
});

//example

// const studentname="Tejas";
// const enrollstudent=(studentname)=>{
// return new Promise(resolve,reject)=>{ 
//     setTimeout(()=>{
//   const issucessful=Math.random()>0.4;
//   if(issucessful){
//     resolve(`Enrollment sucessful for: ${studentname}`)
//   }
//   else{
//     reject(`Enrollment Unsucessful for: ${studentname}`)
//   }
//     },2000)
// }
// }
// enrollstudent(studentname).then((res)=>{
//     console.log(res)
// }).catch((error)=>{
//     console.log(error)
// }).finally(()=>{
//     console.log("Enrollment process complete")
// });