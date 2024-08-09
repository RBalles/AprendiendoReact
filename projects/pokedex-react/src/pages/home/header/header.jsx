import React from "react";
import css from '../header/header.module.scss'
import logo from '../../../assets/pokemon.png'

function Header() {
  return(
    <nav className={css.header}>
      <div className={css.div_header}>
        <div className={css.div_logo}>
          <img src={logo} alt="logo" />
        </div>
        <div className={css.input_header}>
          <input type="search"/>
        </div>
      </div>
    </nav>
  )
}

export default Header;