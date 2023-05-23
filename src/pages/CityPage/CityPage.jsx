import React from "react";
import { useState, useEffect } from "react";
import { useLangContext } from "../../providers/LangProvider";
import { useThemeContext } from "../../providers/ThemeProvider";
import './CityPage.css';
import MainLayout from "../MainLayout/MainLayout";
import useZip from "../../hooks/useZip";
import useWeather from "../../hooks/useWeather";
import CityInfo from "../../components/CityInfo/CityInfo";
import { useHistoryContext } from "../../providers/HistoryProvider";

const CityPage = () => {

    const lang = useLangContext();
    const theme = useThemeContext();
    const {history, addSearch, setHistory, clearHistory} = useHistoryContext();
    
    const [info, fetchInfo] = useZip();
    const [weather, fetchWeather] = useWeather();
    const [zip, setZip] = useState(); //No se necesita, se pasa directamennte a fetchInfo
    
    const errorStyle = {
        color: theme.error
    }

    const buttonStyle = {
        backgroundColor: theme.main,
        color: theme.fontPrimary,
        border: 'none'
    }

    const zipInputStyle = {
        backgroundColor: theme.input,
        color: theme.fontSecondary,
        border: 'none',
        borderRadius: '5px',
        paddingLeft: '5px'
    }

    const colorBorderStyle = {
        color: theme.border
    }
    //
    useEffect(() => {
        let errorText = document.getElementById("error_text");
        errorText.innerHTML = "";
        let introText = document.getElementById("introduce_a_zip");
        introText.innerHTML = "";
        
        if(history.length == 0){
            introText.innerHTML = lang.introduce_a_zip;
        }
        else if (zip == null){
            console.log(info);
            errorText.textContent = lang.zip_error;
        }
        else if(zip == ""){
            errorText.textContent = lang.empty_zip;
        }
        else if(isNaN(zip)){
            errorText.textContent = lang.not_a_number;
        }
        else if (zip.length != 5){
            errorText.textContent = lang.five_char_zip;
        }/*
        else{
            if(info.length != 0){
                console.log(info);
            }
        }*/
    }, [zip]);

    useEffect(() => {
        async function fetchWeatherData() {
            try {
                let lat = info.places[0]['latitude'];
                let lng = info.places[0]['longitude'];
                await fetchWeather(lat, lng);
            } catch (error) {
                //console.log(error);
            }
        }
        fetchWeatherData();
    }, [info, zip]);
    
    const handleOnClick = async () => {
        const zipValue = document.getElementById("input_zip").value;
        setZip(zipValue);
        addSearch(zipValue);
        await fetchInfo(zipValue);
    };
    
    return (
        <MainLayout id="politicInfo">
            <div id="search_div">
                <input type="text" id="input_zip" style={zipInputStyle}/>
                <button id="search_button" style={buttonStyle} onClick={handleOnClick}>{lang.search}</button>
            </div>
            <p id="error_text" style={errorStyle}></p>
            <h2 id="introduce_a_zip" style={colorBorderStyle}></h2>
            <CityInfo info={info} weather={weather}/>
        </MainLayout>
    );
}

export default CityPage;