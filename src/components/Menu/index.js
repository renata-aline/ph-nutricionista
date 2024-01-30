// import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
const Menu = () => {

  const [isToggle, setToggle] = useState(false);

  return (
    <>
    
      <button
        onClick={() => setToggle(!isToggle)}
        className="button-action"
        type="button"
      >
        <MenuIcon fontSize="inherit" className="menu-icon"/>
      </button>
      {isToggle && (
        <div className="menu">
          <ul className="menu-list"
          onClick={() => setToggle(!isToggle)}
          >
            <li>
              <a href="#about"  rel="noreferrer">Sobre Mim</a>
            </li>
            <li>
              <a href="#consultation"  rel="noreferrer">Como Funciona a Consulta</a>
            </li>
            <li>
              <a href="#services"  rel="noreferrer">Serviços</a>
            </li>
            <li>
              <a href="#duvidas-frequentes"  rel="noreferrer">Dúvidas Frequentes</a>
            </li>
            <li>
              <a href="#meet-consultancy"  rel="noreferrer">Conheça o Consultório</a>
            </li>
            <li>
            <a href="#contact"  rel="noreferrer">Contato</a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Menu;
