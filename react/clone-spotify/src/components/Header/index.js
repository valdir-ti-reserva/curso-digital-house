import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import Logo from '../../assets/images/spotify.svg'

function Header(props) {
  return (
    <header className={props.premium ? "header-premium" : ""}>
      <Link to="/">
        <img src={Logo} alt="Logo" className="logo"/>        
      </Link>
      <nav className="nav">
        <ul className={props.premium ? "ul-premium" : ""}>
          <li>
            <Link to="/premium">
              Premium
            </Link>
          </li>
          <li>Ajuda</li>
          <li>Baixar</li>
          <li>|</li>
          <li>Inscrever-se</li>
          <li>Entrar</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
