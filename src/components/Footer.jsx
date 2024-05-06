import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footer}>

    <div>
      <p>&copy; 2024 Caminho Digital da Bíblia</p>
    </div>

    <div>
      <a href="https://github.com/Dannick10" target='_blank'>
       <i class="fa-brands fa-github"></i>
      </a>
      <a href="https://www.linkedin.com/in/futurodevdaniel/" target='_blank'>
      <i class="fa-brands fa-linkedin"></i>
      </a>
      <span>Desenvolvido por  <span>Daniel Rocha</span></span>
    </div>

    </div>
  )
}

export default Footer