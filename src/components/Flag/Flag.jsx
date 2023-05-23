const Flag = (props) => {

    const theme = useThemeContext();

    const style = {
        border: "1px solid " + theme.border
    }
    
    let flag;
    let flagAlt;

    switch (props.state){
        case "AR":
            flag = "bara.gif";
            flagAlt += "Aragón";
            break;
        case "AN":
            flag = "band.gif";
            flagAlt += "Andalucía";
            break;
        case "O":
            flag = "bast.gif";
            flagAlt += "Asturias";
            break;
        case "IB":
            flag = "bbal.gif";
            flagAlt += "Islas Baleares";
            break;
        case "CT":
            flag = "bcat.gif";
            flagAlt += "Cataluña";
            break;
        case "CE":
            flag = "bceu.gif";
            flagAlt += "Ceuta";
            break;
        case "CM":
            flag = "bclm2.gif";
            flagAlt += "Castilla La Mancha";
            break;
        case "CN":
            flag = "bcnr-300x200.png";
            flagAlt += "Canarias";
            break;
        case "S":
            flag = "bcnt.gif";
            flagAlt += "Cantabria";
            break;
        case "CL":
            flag = "bcyl.gif";
            flagAlt += "Castilla Y León";
            break;
        case "PV":
            flag = "beus.gif";
            flagAlt += "País Vasco";
            break;
        case "EX":
            flag = "bext.gif";
            flagAlt += "Extremadura";
            break;    
        case "GA":
            flag = "bgal.gif";
            flagAlt += "Galicia";
            break;
        case "M":
            flag = "bmad.gif";
            flagAlt += "Madorido";
            break;
        case "ML":
            flag = "bmel.gif";
            flagAlt += "Melilla";
            break;
        case "MU":
            flag = "bmur.gif";
            flagAlt += "Murcia";
            break;
        case "NA":
            flag = "bnav.gif";
            flagAlt += "Navarra";
            break;
        case "LO":
            flag = "briojasin.png";
            flagAlt += "La Rioja";
            break;
        case "VC":
            flag = "bval.gif";
            flagAlt += "Comunitat Valenciana";
            break;
        default:
            flag = "logo.png";
            flagAlt += lang.no_flag;
            break;
    }

    return <img src={`/images/flags/${flag}`} width="40px" alt={`${flagAlt}`} className="flag" style={style}/>
}
export default Flag;