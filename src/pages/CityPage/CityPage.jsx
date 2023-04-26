import React from "react";
import { useState, useEffect } from "react";
import { useLangContext } from "../../providers/LangProvider";
import { useThemeContext } from "../../providers/ThemeProvider";
import './CityPage.css';
import MainLayout from "../MainLayout/MainLayout";
import Card from "../../components/Card/Card";
import useZip from "../../hooks/useZip";

const CityPage = () => {

    const lang = useLangContext();
    const theme = useThemeContext();

    const [info, setInfo] = useState([]);
    const [zip, setZip] = useState("");

    const searchZip = () => {

        let errorText = document.getElementById("error_text");

        if (info == null){
            errorText.textContent = lang.zip_error;
        }
        else if(info == "empty zip"){
            errorText.textContent = lang.empty_zip;
        }
        else if(info == "not a number"){
            errorText.textContent = lang.not_a_number;
        }
        else if (info = "not 5"){
            errorText.textContent = lang.five_char_zip;
        }
        else{
            alert("Correcto");
            /*
            const url = `https://api.zippopotam.us/es/${zip}`;
            fetch(url)
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
            <button id="search_button" style={buttonStyle} onClick={searchZip}>{lang.search}</button>
        </div>
        <p id="error_text" style={error_style}></p>
        <Card id="politicInfo" title={lang.politic_info}/>
        </>
    );

    return (
        <MainLayout children={content} id="politicInfo"/>
    );
}

export default CityPage;