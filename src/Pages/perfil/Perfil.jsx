import React from 'react'
import styles from './perfil.module.css'

import { useAuthentication } from '../../hooks/useAuthentication'

const Perfil = () => {

  const { logout } = useAuthentication()

  return (
    <div className={styles.perfil}>

          <div className={styles.perfil_info}>
          <i className="fa-solid fa-user"></i>
            <h2>DASHBOARD</h2>
            <p>Caminho Digital da Bíblia</p>
            <button className='btn btnP' onClick={logout}>SAIR</button>
          </div>

        <sectopm className={styles.perfil_dashboard}>

          <ul>
            <li>
            <i className="fa-solid fa-heart"></i>
              <p>Textos Favoritos</p>
              </li>

            <li>
            <i className="fa-solid fa-magnifying-glass"></i>
              <p>Históricos</p>
              </li>

              <li>
              <i className="fa-solid fa-table-columns"></i>
              <p>Postagens</p>
              </li>

          </ul>
        </sectopm>
    </div>
  )
}

export default Perfil