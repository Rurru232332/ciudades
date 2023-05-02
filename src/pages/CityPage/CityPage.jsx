import React from "react";
import { useState, useEffect } from "react";
import { useLangContext } from "../../providers/LangProvider";
import { useThemeContext } from "../../providers/ThemeProvider";
import './CityPage.css';
import MainLayout from "../MainLayout/MainLayout";
import Card from "../../components/Card/Card";
import useZip from "../../hooks/useZip";
import values from "../../conf/values.json";

const CityPage = () => {

    const lang = useLangContext();
    const theme = useThemeContext();

    const [zip, setZip] = useState(values.defaultzip);
    const [info, fetchInfo] = useZip();
    const [weatherCardContent, setWeatherCardContent] = useState();
    const [weather, setWeather] = useState();
    const [lat, setLat] = useState();
    const [lng, setLng] = useState();
    const [cardList, setCardList] = useState();

    useEffect(() => {
        try{
            let errorText = document.getElementById("error_text");
            //let zip = document.getElementById("input_zip").value;

            if (zip == null){
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
            }
            else{
                if(info.length != 0){
                    console.log(info);
                    let stateAbbr = info.places[0]["state abbreviation"];
                    let flag = "";
                    let flagAlt = lang.flag_of;

                    switch (stateAbbr){
                        case "AR":
                            flag = "bara.gif";
                            flagAlt += "Aragón";
                            break;
                        case "AN":
                            flag = "band.gif";
                            flagAlt += "Andalucía";
                            break;
                        case "O":
                            flag = "bast.gif";
                            flagAlt += "Asturias";
                            break;
                        case "IB":
                            flag = "bbal.gif";
                            flagAlt += "Islas Baleares";
                            break;
                        case "CT":
                            flag = "bcat.gif";
                            flagAlt += "Cataluña";
                            break;
                        case "CE":
                            flag = "bceu.gif";
                            flagAlt += "Ceuta";
                            break;
                        case "CM":
                            flag = "bclm2.gif";
                            flagAlt += "Castilla La Mancha";
                            break;
                        case "CN":
                            flag = "bcnr-300x200.png";
                            flagAlt += "Canarias";
                            break;
                        case "S":
                            flag = "bcnt.gif";
                            flagAlt += "Cantabria";
                            break;
                        case "CL":
                            flag = "bcyl.gif";
                            flagAlt += "Castilla Y León";
                            break;
                        case "PV":
                            flag = "beus.gif";
                            flagAlt += "País Vasco";
                            break;
                        case "EX":
                            flag = "bext.gif";
                            flagAlt += "Extremadura";
                            break;    
                        case "GA":
                            flag = "bgal.gif";
                            flagAlt += "Galicia";
                            break;
                        case "M":
                            flag = "bmad.gif";
                            flagAlt += "Madorido";
                            break;
                        case "ML":
                            flag = "bmel.gif";
                            flagAlt += "Melilla";
                            break;
                        case "MU":
                            flag = "bmur.gif";
                            flagAlt += "Murcia";
                            break;
                        case "NA":
                            flag = "bnav.gif";
                            flagAlt += "Navarra";
                            break;
                        case "LO":
                            flag = "briojasin.png";
                            flagAlt += "La Rioja";
                            break;
                        case "VC":
                            flag = "bval.gif";
                            flagAlt += "Comunitat Valenciana";
                            break;
                        default:
                            flag = "logo.png";
                            flagAlt += lang.no_flag;
                            break;
                    }

                    let flagRoute = "/images/flags/" + flag;
                    let lat = info.places[0]['latitude'];
                    let lng = info.places[0]['longitude'];

                    //fetchWeather(lat, lng);

                    let cardPoliticInfo =
                    <div id="politicInfoContainer">
                        <img src={flagRoute} width="40px" alt={flagAlt} className="flag"/>
                        <div id="city_community_container">
                            <p><span className="bold">{lang.city}: </span>{info.places[0]["place name"]}</p>
                            <p><span className="bold">{lang.community}: </span>{info.places[0]["state"]}</p>
                        </div>
                    </div>

                    let cardLatLng = 
                    <div id="lat_lng_container">
                        <p><span className="bold">{lang.lat}: </span>{lat}</p>
                        <p><span className="bold">{lang.lng}: </span>{lng}</p>
                    </div>

                    setCardList(<>
                        <Card id="politicInfo" title={lang.politic_info} children={cardPoliticInfo}/>
                        <Card id="weatherInfo" title={lang.weather_info} children={weatherCardContent}/>
                        <Card id="latLng" title={lang.geo_info} children={cardLatLng}/>
                    </>)
                }
                else{
                    setCardList(<p className="no_results">{lang.no_results}</p>);
                }
                
            }
        }
        catch(ex){
            setCardList(<p className="no_results">{lang.no_results}</p>);
        }
    }, [info]); 
    
    const handleOnClick = async () => {
        const zipValue = document.getElementById("input_zip").value;
        setZip(zipValue);/*
        const info = await fetchInfo(zipValue);
        setupZip(zipValue);*/
        await fetchInfo(zipValue);
    };
    const setupZip = (zip) => {

        let errorText = document.getElementById("error_text");
        //let zip = document.getElementById("input_zip").value;

        if (zip == null){
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
        }
        else{
            if(info.length != 0){
                console.log(info);
                let stateAbbr = info.places[0]["state abbreviation"];
                let flag = "";
                let flagAlt = lang.flag_of;

                switch (stateAbbr){
                    case "AR":
                        flag = "bara.gif";
                        flagAlt += "Aragón";
                        break;
                    case "AN":
                        flag = "band.gif";
                        flagAlt += "Andalucía";
                        break;
                    case "O":
                        flag = "bast.gif";
                        flagAlt += "Asturias";
                        break;
                    case "IB":
                        flag = "bbal.gif";
                        flagAlt += "Islas Baleares";
                        break;
                    case "CT":
                        flag = "bcat.gif";
                        flagAlt += "Cataluña";
                        break;
                    case "CE":
                        flag = "bceu.gif";
                        flagAlt += "Ceuta";
                        break;
                    case "CM":
                        flag = "bclm2.gif";
                        flagAlt += "Castilla La Mancha";
                        break;
                    case "CN":
                        flag = "bcnr-300x200.png";
                        flagAlt += "Canarias";
                        break;
                    case "S":
                        flag = "bcnt.gif";
                        flagAlt += "Cantabria";
                        break;
                    case "CL":
                        flag = "bcyl.gif";
                        flagAlt += "Castilla Y León";
                        break;
                    case "PV":
                        flag = "beus.gif";
                        flagAlt += "País Vasco";
                        break;
                    case "EX":
                        flag = "bext.gif";
                        flagAlt += "Extremadura";
                        break;    
                    case "GA":
                        flag = "bgal.gif";
                        flagAlt += "Galicia";
                        break;
                    case "M":
                        flag = "bmad.gif";
                        flagAlt += "Madorido";
                        break;
                    case "ML":
                        flag = "bmel.gif";
                        flagAlt += "Melilla";
                        break;
                    case "MU":
                        flag = "bmur.gif";
                        flagAlt += "Murcia";
                        break;
                    case "NA":
                        flag = "bnav.gif";
                        flagAlt += "Navarra";
                        break;
                    case "LO":
                        flag = "briojasin.png";
                        flagAlt += "La Rioja";
                        break;
                    case "VC":
                        flag = "bval.gif";
                        flagAlt += "Comunitat Valenciana";
                        break;
                    default:
                        flag = "logo.png";
                        flagAlt += lang.no_flag;
                        break;
                }

                let flagRoute = "/images/flags/" + flag;
                let lat = info.places[0]['latitude'];
                let lng = info.places[0]['longitude'];

                //fetchWeather(lat, lng);

                let cardPoliticInfo =
                <div id="politicInfoContainer">
                    <img src={flagRoute} width="40px" alt={flagAlt} className="flag"/>
                    <div id="city_community_container">
                        <p><span className="bold">{lang.city}: </span>{info.places[0]["place name"]}</p>
                        <p><span className="bold">{lang.community}: </span>{info.places[0]["state"]}</p>
                    </div>
                </div>

                let cardLatLng = 
                <div id="lat_lng_container">
                    <p><span className="bold">{lang.lat}: </span>{lat}</p>
                    <p><span className="bold">{lang.lng}: </span>{lng}</p>
                </div>

                setCardList(<>
                    <Card id="politicInfo" title={lang.politic_info} children={cardPoliticInfo}/>
                    <Card id="weatherInfo" title={lang.weather_info} children={weatherCardContent}/>
                    <Card id="latLng" title={lang.geo_info} children={cardLatLng}/>
                </>)
            }
            else{
                alert("Sin datos");
            }

        /*
            const url = `https://api.zippopotam.us/es/${zip}`;
            fetch(url)
                    break;
        .then(response => response.json())
                .then(data => {
                    setInfo(data);
                    city = data;
                    console.log("siuu");
                    console.log(data.places[0]["state abbreviation"]);

                })
                .catch(error => console.log(error));
                */
            
        }
    }

    const error_style = {
        backgroundColor: theme.error
    }

    const buttonStyle = {
        backgroundColor: theme.main,
        color: theme.fontPrimary
    }

    const content = (<>
        <div id="search_div">
            <input type="text" id="input_zip"/>
            <button id="search_button" style={buttonStyle} onClick={handleOnClick}>{lang.search}</button>
        </div>
        <p id="error_text" style={error_style}></p>
        <div id="cards_container">
            {cardList}
        </div>
        </>
    );

    return (
        <MainLayout children={content} id="politicInfo"/>
    );
}

export default CityPage;