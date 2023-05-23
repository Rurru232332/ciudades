import { useState } from "react";

const useWeather = () => {
    const [weather, setWeather] = useState({});

    const fetchWeather = async (lat, lng) => {
        try {
            const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&hourly=temperature_2m`;
            console.log(url);
            const response = await fetch(url);
            setWeather(response.data);
        } catch (error) {
            console.error(error);
        }
    }
    return { weather, fetchWeather };

}

export default useWeather;
