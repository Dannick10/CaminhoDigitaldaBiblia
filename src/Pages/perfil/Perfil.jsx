import React from 'react'
import styles from './perfil.module.css'

import { useAuthentication } from '../../hooks/useAuthentication'
import { useAuthValue} from '../../Context/AuthContext'

const Perfil = () => {
  const { user } = useAuthValue()
  const { logout } = useAuthentication()

  return (
    <div className={styles.perfil}>

          <div className={styles.perfil_info}>

          <div>
            <i className="fa-solid fa-user"></i>
            <h2>{user.displayName}</h2>
          </div>

          <div>  
             <h3>DASHBOARD</h3>
            <p>Caminho Digital da Bíblia</p>
          </div>

            <div>
            <button className='btn btnP' onClick={logout}>SAIR</button>
            </div>

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