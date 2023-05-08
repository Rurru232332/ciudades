import { useState } from 'react';
import { useThemeContext } from '../../providers/ThemeProvider';
import './Hour.css';

const Hour = (props) => {
    const [hour, setHour] = useState(props.hour);
    const [temperature, setTemperature] = useState(props.temperature);
    const theme = useThemeContext();

    const style = {
        color: theme.fontSecondary
    }

    return(
    <div className='hour'>
        <div className="vertical" style={style}>{hour}({temperature})</div>
    </div>
    );
}

export default Hour;