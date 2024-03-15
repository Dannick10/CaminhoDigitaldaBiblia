import React from 'react'
import styles from './Header.module.css'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <nav className={styles.nav_digital}>
          <div className={styles.nav_first}>
              <h2>Caminho Digital da Bíblia</h2>
          </div>
          <div className={styles.nav_last}>
          
              <ul>
                  <li><NavLink  to='/'>INICIO</NavLink></li>
                  <li><NavLink to='/livros'>LIVROS</NavLink></li>
                  <li><NavLink to='/sobre'>SOBRE</NavLink></li>
              </ul>
          </div>
    </nav>
  )
}

export default Header