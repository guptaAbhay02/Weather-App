import SearchBox from "./SearchBox";
import InfoBox from "./infoBox";
import { useState } from "react";


export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]=useState({
            city:"Ballia",
            feelsLike:21.74,
            humidity:29,
            temp:22.66,
            tempMax:22.66,
            tempMin:22.66,  
            weather:"clear sky",
    
        });

        let updateInfo=(newInfo)=>{
            setWeatherInfo(newInfo);
        }


    return(
        <div style={{textAlign:"center"}}>
            <h1>Weather App by Delta</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}