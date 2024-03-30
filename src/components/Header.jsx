import React from "react";
import styles from "./Header.module.css";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";


const Header = () => {
  return (
    <>
      <div className="navbar">
        <nav className={styles.nav_digital}>
          <div className={styles.nav_first}>
            <h2>Caminho Digital da Bíblia</h2>
          </div>
          <div className={styles.nav_last}>
            <ul>
              <li>
                <NavLink to="/">INICIO</NavLink>
              </li>
              <li>
                <NavLink to="/livros">LIVROS</NavLink>
              </li>
              <li>
                <NavLink to="/login">Entrar</NavLink>
              </li>
              <li>
                <NavLink to="/register">Registrar</NavLink>
              </li>
              <li>
                <NavLink to="/sobre">SOBRE</NavLink>
              </li>
            </ul>
          </div>
          <div className={styles.nav_mobile}>
            <div className={styles.button_mobile}>
              <input type="checkbox" />
              <span></span>
              <span></span>
              <span></span>
              <div className={styles.links_mobile}>
                <ul>
                  <li>
                    <NavLink to="/">INICIO</NavLink>
                  </li>
                  <li>
                    <NavLink to="/livros">LIVROS</NavLink>
                  </li>
                  <li>
                    <NavLink to="/login">Entrar</NavLink>
                  </li>
                  <li>
                     <NavLink to="/register">Registrar</NavLink>
                   </li>
                  <li>
                    <NavLink to="/sobre">SOBRE</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
