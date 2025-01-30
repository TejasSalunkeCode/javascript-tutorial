let obj={
    name:"tejas",
    stud_id:67,
    greet: function (){
     console.log(this);
     
    }
}
obj.greet();

//object meathod

const product={
    id:12,
    ComPany_name:"Amazon",
    name:"laptop",
     categorey:"Computer",
    price:987,
    descripton:"Very useful in clg"
}

let keys=Object.keys(product);
console.log(keys)

let values=Object.values(product);
console.log(values)

let entries=Object.entries(product);
console.log(entries); 

Object.freeze(product);
product.id=23;
console.log(product.id);

const target={a:12,b:24}
const source={b:42,c:44}
let mergobj=Object.assign(target,source)
console.log(mergobj)


let student={
    name:"ravi",
    age:18,
    grades:{
        math:89,
        science:70,
        history:56,

    },
};

const addsubjGrade=(student,subject,marks)=>{
     if(!student.grade){
       student.grade={};
     }
 return (student.grade[subject]=marks)
}
addsubjGrade(student,"computer",78)
console.log(student)
