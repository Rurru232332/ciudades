import React, { useContext } from 'react';
import { useThemeContext } from '../../providers/ThemeProvider';
import { useLangContext } from '../../providers/LangProvider';
import './Cabecera.css';
import images from '../../conf/images.json';

const Cabecera = (props) => {

    const theme = useThemeContext();
    const lang = useLangContext();

    const style = {
        backgroundColor: theme.main,
        color: theme.fontPrimary
    }

    return (
        <header style={style}>
            <img className="logo" src={images.logo} alt={lang.logoAlt}></img>
            <h1>{lang.title}</h1>
            <div id="tabs">
                <a href="/search">{lang.search}</a>
                <a href="/history">{lang.history}</a>
            </div>
        </header>
    );
}
export default Cabecera;