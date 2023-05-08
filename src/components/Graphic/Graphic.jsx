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
    <div id="weather_containter">
       
        <div id="temperature">
            <div id="minMaxTemp_container">
                <div id="max_temp" className="minMax_temp">{minTemp}</div>
                <div id="min_temp" className="minMax_temp">{maxTemp}</div>
            </div>
            <div id="temperature_bars">
                {data.map((item, index) => {
                    return <Bar key={"bar_" + index} temperature={item.tempWeather}/>
                })}
            </div>
        </div>
        <div id="times">
            {data.map((item, index) => {
                return <Hour key={"time_" + index} hour={item.timeWeather} temperature={item.tempWeather}/>
            })}
        </div>
    </div>
    );
}

export default Graphic;