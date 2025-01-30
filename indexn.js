let cityname=document.querySelector(".weather_city");
let dateTime=document.querySelector(".weather_date_time");
let w_forecast=document.querySelector(".weather_forecast");
let w_temperature=document.querySelector(".weather_temperature");
let w_icon=document.querySelector(".weather_icon");
let w_minTem=document.querySelector(".weather_min");
let w_maxTem=document.querySelector(".weather_max");


const getcountryname=(code)=>{
    return new Intl.DisplayNames([code],{type:"region"} ).of(code);
}; 

 
const getweather=async()=>{
    const apiKey = 'caa27f8051e79d93e7c8176493e119ba';
    const city='pune';

;
    try{
        const res=await fetch(weatherUrl); 
        const data=await res.json();
        // console.log(data);
   
        const {main,name,weather,wind,sys,dt}=data;
       cityname.innerHTML=`${name}, ${getcountryname(sys.country)}`;
       cityname.innerHTML=name;
    }catch(error){
        console.log(error);  
        
    }
};

// document.body.addEventListener("load",getweatherdata()); 
window.addEventListener("load", getweather);
