import React from 'react'
import styles from './Sobre.module.css'
import AboutComponent from '../components/AboutComponent'

const Sobre = () => {
  
  return (
    <main className={styles.about_all}>

    <AboutComponent title="Sobre o Projeto" info="Este projeto foi desenvolvido utilizando a poderosa biblioteca React para a construção da interface do usuário, proporcionando uma experiência fluida e responsiva em diversas plataformas e dispositivos. Cada detalhe foi cuidadosamente projetado no Figma, garantindo uma experiência visualmente atraente e intuitiva." submit={false}/>

    <AboutComponent title="Objetivo" info="Nosso objetivo com este projeto é oferecer uma plataforma moderna e prática para que os usuários possam acessar as Escrituras Sagradas de maneira fácil e inspiradora. Buscamos unir a tradição da Palavra de Deus com a inovação da tecnologia, proporcionando uma experiência de leitura e estudo que possa enriquecer a jornada espiritual de cada indivíduo."/>

    <AboutComponent title="FEEDBACK" info="Se você tiver alguma sugestão ou desejar colaborar de alguma forma, não hesite em entrar em contato conosco. Sua opinião é fundamental para o aprimoramento contínuo deste projeto." submit={true}/>

    </main>
  )
}

export default Sobre