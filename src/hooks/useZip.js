import { useState, useEffect } from "react";

function useZip(zipcode){
    const url = `https://api.zippopotam.us/es/${zipcode}`;

    const [info, setInfo] = useState(null);
    
    const fetchZip = () => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setInfo(data);
                return info;
            })
            .catch(error => console.log(error));
    }

    useEffect(() => {
        let ret;
        if(zipcode.length == 0){
            ret = "empty zip";
        }
        else if(isNaN(zipcode)){
            ret = "not a number";
        }
        else if(zipcode.length != 5){
            ret = "not 5";
        }
        else{
            ret = fetchZip();
        }
        return () => {return ret};
    }, []);
      
    return info;
}

export default useZip;