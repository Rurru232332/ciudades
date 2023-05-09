import { useState } from "react";
import useWeather from "./useWeather";

function useZip() {
    const [info, setInfo] = useState([]);
    const [lat, setLat] = useState();
    const [lng, setLng] = useState();
    const [weather, fetchWeather] = useWeather();
    const [weatherData, setWeatherData] = useState([]);
  
    const fetchInfo = async (zipcode) => {
      try {
        const url = `https://api.zippopotam.us/es/${zipcode}`;
        const response = await fetch(url);
        const data = await response.json();
        setInfo(data);
        const lat = data.places[0].latitude;
        const lng = data.places[0].longitude;
        setLat(lat);
        setLng(lng);
        const weatherFetchData = await fetchWeather(lat, lng); // call fetchWeather with updated lat and lng
        setWeatherData(weatherFetchData);
      } catch (error) {
        setInfo(null);
      }
      return[info, weather];
    };
  
    return [info, fetchInfo, weatherData];
  }
  
  export default useZip;