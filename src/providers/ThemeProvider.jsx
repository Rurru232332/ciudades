import React, { useContext } from "react";
import { useState, createContext, ReactNode } from "react";
import themes from '../conf/color_themes/themes.json';

const ThemeContext = React.createContext();
const ChangeThemeContext = React.createContext();

export function useThemeContext(){
    return useContext(ThemeContext);
}

export function useChangeThemeContext(){
    return useContext(ChangeThemeContext);
}

export function ThemeProvider(props){

    const [theme, setTheme] = useState(themes.light);

    function changeTheme(themeElection){
        if(themeElection == "light"){
            setTheme(themes.light);
        }
        else if(themeElection == "dark"){
            setTheme(themes.dark);
        }
        else{
            setTheme(themes.light);
        }
    }

    return (
        <ThemeContext.Provider value={theme}>
            <ChangeThemeContext.Provider value={changeTheme}>
                {props.children}
            </ChangeThemeContext.Provider>
        </ThemeContext.Provider>
    );
}