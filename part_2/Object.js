let person={
    age:18,
    name:"Jon",
    "is'student":false,
    greet : function(){
        console.log("Hello Its a call from object")
    }

}
console.log(person["age"])
console.log(person.name)
console.log(person["is'student"])  //special character accsess using this meathod
console.log(person)


person.job="web dev";
console.log(person.job)
console.log(person)

person.greet();//call meathod



idtype="studentId";
let student={
    [idtype]:"abc'123",
    stu_name:"Tejas",
    clg_name:"pccoe",

    display: function(){
        return `Hey my ${idtype} is ${student[idtype]} and my name is ${student.stu_name}`;
    }
}
console.log(student.display())


//pass by value
let a=12;
const examppass=(x)=>(x=20)
 console.log(examppass(a));
 console.log(a)


 //pass by reference
 
 let stud={s_name:"Nilesh",s_prn:24}
 stud2=stud;
 stud2.s_name="om";
 console.log(stud)
 console.log(stud2)

 //
 let newstud={s_name:"Nilesh",s_prn:24}
 let obj2={};
 stud2=Object.assign(obj2,newstud);
 stud2.s_name="om";
 console.log(newstud)
 console.log(stud2)


