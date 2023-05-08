import { useState } from 'react';
import { useThemeContext } from '../../providers/ThemeProvider';

const Bar = (props) => {
    
    const [temperature, setTemperature] = useState(props.temperature);
    const theme = useThemeContext();
    
    const style = {
        backgroundColor: theme.main,
        width: '15px',
        height: temperature,
        marginLeft: '2px'
    }

    return <div style={style}></div>
}

export default Bar;