import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./Info.css";

export default function Infobox({info}){
    let INtURL= "https://images.unsplash.com/photo-1561553590-267fc716698a?q=80&w=1492&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
   
    
    return(
         <div className='inforbox'>
            <h1>Weather info-{info.weather}</h1>
            <div className='container'>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={INtURL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
          <p> Temprature-{info.temp}&deg;c</p>
          <p> Humidity-{info.humidity}&deg;c</p>
          <p>Min_Temp-{info.tempMin}&deg;c</p>
          <p>Max_Temp-{info.tempMax}&deg;c</p>
          <p> The Weather  can be described <i>{info.weather}</i>  and feels like- {info.feelslike}&deg;c</p>
        </Typography>
      </CardContent>
      
    </Card>
            </div>

             

    </div>
        
    );
}