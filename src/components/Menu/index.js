//  import { Link } from "react-router-dom";
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
        <MenuIcon />
      </button>
      {isToggle && (
        <div className="menu">
          <ul className="menu-list">
            <li>
              <a href="">Sobre Mim</a>
            </li>
            <li>
              <a href="">Como Funciona a Consulta</a>
            </li>
            <li>
              <a href="">Serviços</a>
            </li>
            <li>
              <a href="">Dúvidas Frequentes</a>
            </li>
            <li>
              <a href="">Conheça o Consultório</a>
            </li>
            <li>
            <a href="">Contato</a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Menu;
