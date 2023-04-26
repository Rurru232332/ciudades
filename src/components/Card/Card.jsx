import React from "react";
import './Card.css';
import { useThemeContext } from "../../providers/ThemeProvider";

const Card = (props) => {

    const theme = useThemeContext();

    var hidden = false;
    const style = {
        border: "1px solid black"
    };
    const headerStyle = {
        backgroundColor: theme.main,
        color: theme.fontPrimary
    }
    const buttonStyle = {
        backgroundColor: theme.closeTagButton,
        border: "1px solid black",
        color: theme.fontSecondary
    }

    function minimize(){
        let content = document.getElementById("cardContent_" + props.id);
        let button = document.getElementById("minimizeButton_" + props.id);
        if(!hidden){
            content.classList.add("hidden");
            button.innerHTML = '\u{25A1}';
        }
        else{
            content.classList.remove("hidden");
            button.innerHTML = "_";
        }
        hidden = !hidden;
    }

    return (
        <div id={"card_" + props.id} className="card" style={style}>
            <div className="cardHeader" style={headerStyle}>
                <h2 className="cardTitle">{props.title}</h2>
                <div id={"minimizeButton_" + props.id} className="minimizeButton" style={buttonStyle} onClick={minimize}>_</div>
            </div>
            <div id={"cardContent_" + props.id}>
                {props.children}
            </div>
        </div>
    );
}

export default Card;