import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./Search.css";
import { useState } from 'react';


export default function Searchbox({updateinfo}){
    let[city,setcity]= useState("");
    let[Error,setError]=useState(false)
    
        let API_URL="https://api.openweathermap.org/data/2.5/weather";
    let apikey="408c4f5770afc96068c8d95f1173b5cd";
    let getWeatherinfo= async()=>{
        try{
        let responce=await fetch(`${API_URL}?q=${city} &appid=${apikey}& `);
        let jsonresponce= await responce.json();

        let  result={
            city:city,
        temp: jsonresponce.main.temp,
        tempMin: jsonresponce.main.temp_min,
        tempMAx:jsonresponce.main.temp_max,
        humidity: jsonresponce.main.humidity,
        feelseLike:jsonresponce.main.feels_like,
        weather: jsonresponce.weather[0].description

        };
        console.log(result);
        return result;
    } catch(err){
       throw err;
 
    };

    
    };
     
   
    let handleChange=(event)=>{
        setcity(event.target.value);

    }
    let handlesummit= async(event)=>{
        try{
            event.preventDefault();
            console.log(city);
            setcity("");
           let newinfo=await getWeatherinfo();
           updateinfo(newinfo);
        }catch(err){
            setError(true)
        }
       
    };
    return (
        <div className='search'>
     
     <form onSubmit={handlesummit}>

     <TextField id="outlined-basic" 
     label="Cityname"
      variant="outlined" 
      value={city}
      onChange={handleChange }
            required />
     <br />
     <br />
     <Button variant="contained"  type='submit'  >
          Search
        </Button>
     </form>
     { Error && <p style={{ color:"red"}}> No Such Place Exist!</p>
     }
        </div>
    );
};