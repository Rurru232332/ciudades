import { useNavigate } from "react-router-dom";
import { useThemeContext } from '../../providers/ThemeProvider';
import { useLangContext } from '../../providers/LangProvider';
import './Cabecera.css';
import images from '../../conf/images.json';

const Cabecera = (props) => {

    const theme = useThemeContext();
    const lang = useLangContext();
    const navigate = useNavigate();

    const style = {
        backgroundColor: theme.main,
        color: theme.fontPrimary
    }
    //useNavigate
    return (
        <header style={style}>
            <img className="logo" src={images.logo} alt={lang.logoAlt}></img>
            <h1>{lang.title}</h1>
            <div id="tabs">
                <span onClick={navigate("/search")}>{lang.search}</span>
                <span onClick={navigate("/history")}>{lang.history}</span> 
            </div>
        </header>
    );
}
export default Cabecera;