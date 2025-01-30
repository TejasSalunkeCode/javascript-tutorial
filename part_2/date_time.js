
        // 1
        const currentDate = new Date();
        console.log(currentDate)
        // 2
        const date1 = new Date(2025, 12)
        console.log(date1)
        // 3
        const date2 = new Date(2024, 3, 25)
        console.log(date2)
        // 4
        const date3 = new Date(2024, 12, 25, 10)
        console.log(date3)
        // 5
        const date4 = new Date(2024, 12, 25, 10, 47)
        console.log(date4)
        // 6
        const date5 = new Date(2024, 12, 25, 10, 47, 59)
        console.log(date5)
        // 7
        const date6 = new Date(2024, 12, 25, 10, 47, 59, 123464)
        console.log(date6)
        // 8
        const date7 = new Date(123464)
        console.log(date7)

           //current milisecond
        const curmilliseconds=new Date().getTime();
        console.log(curmilliseconds)
        const datefrommiliseconds=new Date(curmilliseconds);
        console.log(datefrommiliseconds    
        )

        //Get Date Meathods:
        console.log("Get Meathods")
        const currndate=new Date();
        const year=currndate.getFullYear();
        console.log(year)
        const month=currndate.getMonth();
        console.log(month)
        const date=currndate.getDate();
        console.log(date)
        const dayy=currndate.getDay();
        console.log(dayy)
        console.log(currndate)


        //set Date Meathods
        console.log("set Meathods")
        const currndatedemo=new Date();
        console.log(currndatedemo)

       currndatedemo.setMonth(6)
       console.log(currndatedemo)

       currndatedemo.setFullYear(2025)
       console.log(currndatedemo)

       
       currndatedemo.setDate(20)
       console.log(currndatedemo)

     
       //Get Time Meathods:
       console.log("Get Time Meathods:")
       const currenttime=new Date();
       const hour=currenttime.getHours();
       console.log(hour)
       const minute=currenttime.getMinutes();
       console.log(minute)
       const second=currenttime.getSeconds();
       console.log(second)
       const time=currenttime.getTime();
       console.log(time)
      

       //shortcut meathod
       const datemeathod = new Date();
       console.log(Date.now())
         
       const localdate=datemeathod.toLocaleDateString();
       console.log(localdate)

       const localtime=datemeathod.toLocaleTimeString();
       console.log(localtime)

       const localstring=datemeathod.toLocaleString()
       console.log(localstring)

        //add days to date
        const adddaysToDate=(date_n,extraday)=>{
            let updateDate=date_n.setDate(date_n.getDate()+extraday)
            return new Date(updateDate)
            
        } 
        const date_n=new Date("2024-02-29");
        const newDate=adddaysToDate(date_n,7)
        console.log(newDate)
        console.log(newDate.toLocaleDateString());
       

//diff date
const geDaysdiffernece=(d1,d2)=>{
    let onday=24*60*60*1000;
  let diff =d2-d1;
  return Math.round(diff/onday);
}
        const date_a=new Date("2024-02-19");
        const date_b=new Date("2024-03-01");
        console.log(geDaysdiffernece(date_a,date_b))


        //setTimeout
        const repeatfunction=(x)=>{
            console.log("The functtion called settimeout",x)
        }
        setTimeout(repeatfunction,2000)
        setTimeout(()=>repeatfunction(6),2000)


        
        //setInterval
        const repeatfunction2=(x)=>{
            console.log("The functtion called setInterval",x)
        }
        setInterval(repeatfunction2,2000)

 //ClearTimeout
        const repeatfunction3=(x)=>{
            console.log("The functtion called setInterval",x)
        }
      const work=  setInterval(repeatfunction3,2000)
      clearTimeout(work)


//        //ClearInterval
//        const repeatfunction4=(x)=>{
//         console.log("The functtion called setInterval",x)   //Throwgh Error
//     }
//   const work2=  setInterval(repeatfunction4,2000)
//   clearTimeout(work)



//cleartimeout()use

const repeatedfunction=()=>{
    console.log("The Function is repeted after 1 second")
}
repeatedfunction();
const clearid=setInterval(repeatedfunction,1000);
setTimeout(()=>{
    clearInterval(clearid);
},5000);
     