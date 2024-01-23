import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="menu">
      <ul>
        <li>
          <Link to="">Sobre Mim</Link>
        </li>
        <li>
          <Link to="">como funciona a consulta</Link>
        </li>
        <li>
          <Link to="">Perguntas frequentes</Link>
        </li>
        <li>
          <Link to="">Feedback</Link>
        </li>
        <li>
          <Link to="">Contato</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
