import React, { useContext } from "react";
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { useLangContext } from "../../providers/LangProvider";
import Flag from './Flag';
import lang from '../../conf/lang.json';

jest.mock("../../providers/LangProvider", () => {
  return {
    useLangContext: jest.fn()
  }
});

let container = null;
beforeEach(() => {
  // configurar un elemento del DOM como objetivo del renderizado
  container = document.createElement("div");
  document.body.appendChild(container);
  useLangContext.mockImplementation(() => {
    return {
      languaje: lang[lang.languaje]
    }
  })
});

afterEach(() => {
  // limpieza al salir
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe("Test for Flag", () => {
  test("Primer test: comprobando que la bandera no sea nula", () => {
    act(() => {
      render(<Flag />, container)
    })
  });

  test("Bandera de AR", () => {
    act(() => {
      render(<Flag state="AR"/>, container)
    })
    let flag = "";
    let flagAlt = lang.flag_of;
    flag = "bara.gif";
    flagAlt += "Aragón";
    expect(container.innerHTML).toBe(`<img src=\"/images/flags/${flag}\" width=\"40px\" alt=\"${flagAlt}\" class=\"flag\">`)
  })

  test("Bandera de AN", () => {
    act(() => {
      render(<Flag state="AN"/>, container)
    })
    let flag = "";
    let flagAlt = lang.flag_of;
    flag = "band.gif";
    flagAlt += "Andalucía";
    expect(container.innerHTML).toBe(`<img src=\"/images/flags/${flag}\" width=\"40px\" alt=\"${flagAlt}\" class=\"flag\">`)
  })

  test("Bandera de O", () => {
    act(() => {
      render(<Flag state="O"/>, container)
    })
    let flag = "";
    let flagAlt = lang.flag_of;
    flag = "bast.gif";
    flagAlt += "Asturias";
    expect(container.innerHTML).toBe(`<img src=\"/images/flags/${flag}\" width=\"40px\" alt=\"${flagAlt}\" class=\"flag\">`)
  })
  
  test("Bandera de IB", () => {
    act(() => {
      render(<Flag state="IB"/>, container)
    })
    let flag = "";
    let flagAlt = lang.flag_of;
    flag = "bbal.gif";
    flagAlt += "Islas Baleares";
    expect(container.innerHTML).toBe(`<img src=\"/images/flags/${flag}\" width=\"40px\" alt=\"${flagAlt}\" class=\"flag\">`)
  })
  
  test("Bandera de CT", () => {
    act(() => {
      render(<Flag state="CT"/>, container)
    })
    let flag = "";
    let flagAlt = lang.flag_of;
    flag = "bcat.gif";
    flagAlt += "Cataluña";
    expect(container.innerHTML).toBe(`<img src=\"/images/flags/${flag}\" width=\"40px\" alt=\"${flagAlt}\" class=\"flag\">`)
  })

  test("Bandera de CE", () => {
    act(() => {
      render(<Flag state="CE"/>, container)
    })
    let flag = "";
    let flagAlt = lang.flag_of;
    flag = "bceu.gif";
    flagAlt += "Ceuta";
    expect(container.innerHTML).toBe(`<img src=\"/images/flags/${flag}\" width=\"40px\" alt=\"${flagAlt}\" class=\"flag\">`)
  })

  test("Bandera de CM", () => {
    act(() => {
      render(<Flag state="CM"/>, container)
    })
    let flag = "";
    let flagAlt = lang.flag_of;
    flag = "bclm2.gif";
    flagAlt += "Castilla La Mancha";
    expect(container.innerHTML).toBe(`<img src=\"/images/flags/${flag}\" width=\"40px\" alt=\"${flagAlt}\" class=\"flag\">`)
  })
  //AQUI

  test("Bandera de CN", () => {
    act(() => {
      render(<Flag state="CN"/>, container)
    })
    let flag = "";
    let flagAlt = lang.flag_of;
    flag = "bcnr-300x200.png";
    flagAlt += "Canarias";
    expect(container.innerHTML).toBe(`<img src=\"/images/flags/${flag}\" width=\"40px\" alt=\"${flagAlt}\" class=\"flag\">`)
  })

  test("Bandera de S", () => {
    act(() => {
      render(<Flag state="S"/>, container)
    })
    let flag = "";
    let flagAlt = lang.flag_of;
    flag = "bcnt.gif";
    flagAlt += "Cantabria";
    expect(container.innerHTML).toBe(`<img src=\"/images/flags/${flag}\" width=\"40px\" alt=\"${flagAlt}\" class=\"flag\">`)
  })

  test("Bandera de CL", () => {
    act(() => {
      render(<Flag state="CL"/>, container)
    })
    let flag = "";
    let flagAlt = lang.flag_of;
    flag = "bcyl.gif";
    flagAlt += "Castilla Y León";
    expect(container.innerHTML).toBe(`<img src=\"/images/flags/${flag}\" width=\"40px\" alt=\"${flagAlt}\" class=\"flag\">`)
  })
  
  test("Bandera de PV", () => {
    act(() => {
      render(<Flag state="PV"/>, container)
    })
    let flag = "";
    let flagAlt = lang.flag_of;
    flag = "beus.gif";
    flagAlt += "País Vasco";
    expect(container.innerHTML).toBe(`<img src=\"/images/flags/${flag}\" width=\"40px\" alt=\"${flagAlt}\" class=\"flag\">`)
  })
  
  test("Bandera de EX", () => {
    act(() => {
      render(<Flag state="EX"/>, container)
    })
    let flag = "";
    let flagAlt = lang.flag_of;
    flag = "bext.gif";
    flagAlt += "Extremadura";
    expect(container.innerHTML).toBe(`<img src=\"/images/flags/${flag}\" width=\"40px\" alt=\"${flagAlt}\" class=\"flag\">`)
  })

  test("Bandera de GA", () => {
    act(() => {
      render(<Flag state="GA"/>, container)
    })
    let flag = "";
    let flagAlt = lang.flag_of;
    flag = "bgal.gif";
    flagAlt += "Galicia";
    expect(container.innerHTML).toBe(`<img src=\"/images/flags/${flag}\" width=\"40px\" alt=\"${flagAlt}\" class=\"flag\">`)
  })

  test("Bandera de M", () => {
    act(() => {
      render(<Flag state="M"/>, container)
    })
    let flag = "";
    let flagAlt = lang.flag_of;
    flag = "bmad.gif";
    flagAlt += "Madorido";
    expect(container.innerHTML).toBe(`<img src=\"/images/flags/${flag}\" width=\"40px\" alt=\"${flagAlt}\" class=\"flag\">`)
  })
  //ASAA
  
  test("Bandera de ML", () => {
    act(() => {
      render(<Flag state="ML"/>, container)
    })
    let flag = "";
    let flagAlt = lang.flag_of;
    flag = "bmel.gif";
    flagAlt += "Melilla";
    expect(container.innerHTML).toBe(`<img src=\"/images/flags/${flag}\" width=\"40px\" alt=\"${flagAlt}\" class=\"flag\">`)
  })
  test("Bandera de MU", () => {
    act(() => {
      render(<Flag state="MU"/>, container)
    })
    let flag = "";
    let flagAlt = lang.flag_of;
    flag = "bmur.gif";
    flagAlt += "Murcia";
    expect(container.innerHTML).toBe(`<img src=\"/images/flags/${flag}\" width=\"40px\" alt=\"${flagAlt}\" class=\"flag\">`)
  })
  test("Bandera de NA", () => {
    act(() => {
      render(<Flag state="NA"/>, container)
    })
    let flag = "";
    let flagAlt = lang.flag_of;
    flag = "bnav.gif";
    flagAlt += "Navarra";
    expect(container.innerHTML).toBe(`<img src=\"/images/flags/${flag}\" width=\"40px\" alt=\"${flagAlt}\" class=\"flag\">`)
  })
  test("Bandera de LO", () => {
    act(() => {
      render(<Flag state="LO"/>, container)
    })
    let flag = "";
    let flagAlt = lang.flag_of;
    flag = "briojasin.png";
    flagAlt += "La Rioja";
    expect(container.innerHTML).toBe(`<img src=\"/images/flags/${flag}\" width=\"40px\" alt=\"${flagAlt}\" class=\"flag\">`)
  })
  test("Bandera de VC", () => {
    act(() => {
      render(<Flag state="VC"/>, container)
    })
    let flag = "";
    let flagAlt = lang.flag_of;
    flag = "bval.gif";
    flagAlt += "Comunitat Valenciana";
    expect(container.innerHTML).toBe(`<img src=\"/images/flags/${flag}\" width=\"40px\" alt=\"${flagAlt}\" class=\"flag\">`)
  })
  test("Bandera incorrecta", () => {
    act(() => {
      render(<Flag state="KK"/>, container)
    })
    let flag = "";
    let flagAlt = lang.flag_of;
    flag = "logo.png";
    flagAlt += lang.no_flag;
    expect(container.innerHTML).toBe(`<img src=\"/images/flags/${flag}\" width=\"40px\" alt=\"${flagAlt}\" class=\"flag\">`)
  })
})