import React from "react"
import Cabecera from "../../components/Cabecera/Cabecera";

const MainLayout = (props) => {
    return (
    <>
        <Cabecera/>
        {props.children}
    </>);
}

export default MainLayout;