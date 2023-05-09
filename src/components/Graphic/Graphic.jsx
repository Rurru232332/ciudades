import { useState } from 'react';
import Bar from '../Bar/Bar';
import Hour from '../Hour/Hour';
import './Graphic.css';
import { useThemeContext } from '../../providers/ThemeProvider';

const Graphic = (props) => {
    const [data, setData] = useState(props.data);
    const theme = useThemeContext();
/*
    const borderStyle = {
        borderBottom: `1px ${theme.border}`,
        borderLeft: `1px ${theme.border}`
    }*/
    var minTemp = data[0].tempWeather;
    var maxTemp = data[0].tempWeather;
    for(let item of data){
        if(minTemp < item.tempWeather){
            minTemp = item.tempWeather;
        }
        if(maxTemp > item.tempWeather){
            maxTemp = item.tempWeather;
        }
    }

    return (
    <div id="weather_container">
        <div id="minMaxTemp_container">
            <div id="max_temp" className="minMax_temp">{minTemp}</div>
            <div id="min_temp" className="minMax_temp">{maxTemp}</div>
        </div>
        <div id="temperature_bars">
            {data.map((item, index) => {
                return <Bar key={"bar_" + index} temperature={item.tempWeather}/>
            })}
        </div>
        <div>{/*Empty div to fit the grid*/}</div> 
        <div id="times">
            {data.map((item, index) => {
                //formatting the number like: -NN.N
                let temperatureFormatted = (Math.round(item.tempWeather * 100) / 100).toFixed(1); //format to 1 digits after comma
                if(temperatureFormatted >= 10){ //if temperature has two digits before comma (it's greater than 10), add a blankspace to replace the -
                    temperatureFormatted = " " + temperatureFormatted;
                }
                else if(temperatureFormatted >= 0){ //if the temperature has one digit before comma (it's lower than 10 but higher or equal than 0), add a blankspace to replace the - and a 0
                    temperatureFormatted = " 0" + temperatureFormatted;
                }
                else if(temperatureFormatted > -10){ //if temperature is lower than 0 but higher than -10 (that is, it's negative and only has one digit before comma)
                    temperatureFormatted *= -1; //remove the - by multiplying it by -1, so if the number was -2.53, now is 2.53
                    temperatureFormatted = "-0" + temperatureFormatted; //add "-0" so if the number was 2.53, now is -02.53 
                }
                //if the number is lower than -10, the number is correctly formatted
                return <Hour key={"time_" + index} hour={item.timeWeather} temperature={temperatureFormatted}/>
            })}
        </div>
    </div>
    );
}

export default Graphic;