import React from 'react'
import styles from './perfil.module.css'
import { Link } from 'react-router-dom'

import IconProfile from '../../components/iconProfile'

import { useAuthentication } from '../../hooks/useAuthentication'
import { useAuthValue} from '../../Context/AuthContext'

const Perfil = () => {
  const { user } = useAuthValue()
  const { logout } = useAuthentication()

  return (
    <div className={styles.perfil}>

          <div className={styles.perfil_info}>

          <div>
            <IconProfile icon={user.displayName} size={2} background={'var(--color3)'} color={'var(--color1)'} font={2}/>
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

        <section className={styles.perfil_dashboard}>

          <ul>
            <Link to={'/favoritebook'}>
            <li>
            <i className="fa-solid fa-heart"></i>
              <p>Textos Favoritos</p>
              </li>
            </Link>


              <Link to="/mypost">
              <li>
              <i className="fa-solid fa-table-columns"></i>
              Postagens
              </li>
              </Link>

            <li className={styles.develop}>
              <p>EM DESENVOLVIMENTO</p>    
              </li>

          </ul>
        </section>
    </div>
  )
}

export default Perfil