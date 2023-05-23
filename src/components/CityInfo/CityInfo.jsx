import { useLangContext } from "../../providers/LangProvider";
import { useThemeContext } from "../../providers/ThemeProvider";
import Card from "../Card/Card";
import Flag from "../Flag/Flag";
import Graphic from "../Graphic/Graphic";
import NoResults from "../NoResults/NoResults";

const CityInfo = (props) => {

    const lang = useLangContext();
    const theme = useThemeContext();

    const cardsContainerStyle = {
        paddingBottom: '20px',
        backgroundColor: theme.background
    }

    const fontSecondaryStyle = {
        color: theme.fontSecondary
    }
    
    // if(props.info == null || props.info == [] || props.weather == null || props.weather == []){
    //     return <NoResults/>;
    // }
    // else{
    try{
        return (
            <div id="cards_container" style={cardsContainerStyle}>
                <Card id="politicInfo" title={lang.politic_info}>
                    <div id="politicInfoContainer">
                        <Flag state={props.info.places[0]["state abbreviation"]}/>
                        <div id="city_community_container">
                            <p style={fontSecondaryStyle}><span className="bold">{lang.city}: </span>{props.info.places[0]["place name"]}</p>
                            <p style={fontSecondaryStyle}><span className="bold">{lang.community}: </span>{props.info.places[0]["state"]}</p>
                        </div>
                    </div>
                </Card>
                <Card id="weatherInfo" title={lang.weather_info}>
                    <Graphic data={props.weather}/>
                </Card>
                <Card id="latLng" title={lang.geo_info}>
                    <div id="lat_lng_container">
                        <p style={fontSecondaryStyle}><span className="bold">{lang.lat}: </span>{props.info.places[0]['latitude']}</p>
                        <p style={fontSecondaryStyle}><span className="bold">{lang.lng}: </span>{props.info.places[0]['longitude']}</p>
                    </div>
                </Card>
            </div>
        );
    }
    catch(error){
        return <NoResults/>
    }
    //}
}

export default CityInfo;