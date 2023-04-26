import React, { useContext } from "react";
import { useState, createContext, ReactNode } from "react";
import lang from '../conf/lang.json';

const LangContext = React.createContext();

export function useLangContext(){
    return useContext(LangContext);
}

export function LangProvider(props){

    const [languaje, setLang] = useState(lang.spanish);

    return (
        <LangContext.Provider value={languaje}>
            {props.children}
        </LangContext.Provider>
    );
}