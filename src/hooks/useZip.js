import { useState, useEffect } from "react";

function useZip(){

    const [info, setInfo] = useState([]);

    const fetchInfo = async (zipcode) => {
        const url = `https://api.zippopotam.us/es/${zipcode}`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setInfo(data);
            })
            .catch(error => console.log(error));
    }
    
    return [info, fetchInfo];
}

export default useZip;