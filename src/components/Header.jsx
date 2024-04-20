import React from "react";
import styles from "./Header.module.css";
import { Link, NavLink } from "react-router-dom";
import { useState,useRef } from "react";

import { useAuthentication } from "../hooks/useAuthentication";
import { useAuthValue } from "../Context/AuthContext";

const Header = () => {

  const { user } = useAuthValue()

  const [checked,SetChecked] = useState(false)
  const menu = useRef()

  const closeMenu = () => {
    if (menu.current && menu.current.checked) {
      SetChecked(false)
      menu.current.checked = false;
    } 
  }

  const links = (e) => {
      closeMenu()
  }


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

            { !user && (
              <>
              <li>
                <NavLink to="/login">Entrar</NavLink>
              </li>
              <li>
                <NavLink to="/register">Registrar</NavLink>
              </li>
              </>
            )
             }
              <li>
                <NavLink to="/sobre">SOBRE</NavLink>
              </li>

              {user && <>
                <li>
                  <NavLink to="/perfil">PERFIL</NavLink>
                </li>
              </>}           
                

              {user && <>
                <li>
                  <NavLink to="/feed">FEED</NavLink>
                </li>
              </>}           
            </ul>
          </div>
          {checked && (
          <div className="closeMenu" style={{left:'0'}} onClick={closeMenu}></div>
          )}

          <div className={styles.nav_mobile}>
            <div className={styles.button_mobile}>
              <input type="checkbox" ref={menu} onChange={()=>{checked?SetChecked(false):SetChecked(true)}}/>
              <span></span>
              <span></span>
              <span></span>
              <div className={styles.links_mobile} onClick={links}>
                <ul>
                  <li>
                    <NavLink to="/">INICIO</NavLink>
                  </li>
                  <li>
                    <NavLink to="/livros">LIVROS</NavLink>
                  </li>
                  {!user && (<>
                  <li>
                    <NavLink to="/login">Entrar</NavLink>
                  </li>
                  <li>
                     <NavLink to="/register">Registrar</NavLink>
                   </li>
                  </>)}
                  <li>
                    <NavLink to="/sobre">SOBRE</NavLink>
                  </li>
                  {user && <>
                <li>
                  <NavLink to="/perfil">PERFIL</NavLink>
                </li>
              </>}

              {user && <>
                <li>
                  <NavLink to="/feed">FEED</NavLink>
                </li>
              </>}           
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
