import React, { useContext } from "react";
import { useState } from "react";

const HistoryContext = React.createContext();
const AddSearchContext = React.createContext();
const ClearHistoryContext = React.createContext();

export function useHistoryContext(){
    return useContext(HistoryContext);
}

export function useAddSearchContext(){
    return useContext(AddSearchContext);
}
 
export function useClearHistoryContext(){
    return useContext(ClearHistoryContext);
}

export function HistoryProvider(props){

    const [history, setHistory] = useState([]);

    function addSearch(search){
        setHistory(history.push(search));
    }

    function clearHistory(){
        setHistory([]);
    }

    return (
        <HistoryContext.Provider value={history}>
            <AddSearchContext.Provider value={addSearch}>
                <ClearHistoryContext.Provider value={clearHistory}>
                    {props.children}
                </ClearHistoryContext.Provider>
            </AddSearchContext.Provider>
        </HistoryContext.Provider>
    );
}