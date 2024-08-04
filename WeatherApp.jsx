import Searchbox from "./Searchbox";
import Infobox from "./Infobox";
import { useState } from "react";

export default function (){
    let[weatherinfo,setweatherinfo]= useState(
        {
        city:"Wonderland",
         feelslike:24.83,
         temp:25.05,
         tempMin:25.05,
         tempMax:25.04,
         humidity:47,
         weather:"haze",
        }
    );
    let updateinfo=(result)=>{
       setweatherinfo(result);
    };
    return (
        
        <div style={{textAlign:"center"}}>
       <h2> Weather App  By- MYself</h2>
        
        <Searchbox updateinfo={updateinfo} />
        <Infobox info={weatherinfo}/> 
        </div>

    );
};