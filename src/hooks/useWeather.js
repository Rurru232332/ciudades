import { useState, useEffect } from "react";

function useWeather(){

    const [weather, setWeather] = useState([]);

    const fetchWeather = async (lat, lng) => {
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&hourly=temperature_2m`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setWeather(data);
            })
            .catch(error => console.log(error));
    }
    
    return [weather, fetchWeather];
}

export default useWeather;