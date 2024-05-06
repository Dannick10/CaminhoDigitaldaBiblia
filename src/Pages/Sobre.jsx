import React from 'react'
import styles from './Sobre.module.css'

const Sobre = () => {
  
  return (
    <main className={styles.about_all}>

  <section className="about_main">
  
      <aside className="about_section">
        <div className="title_about">
        
              <span className="firstline"></span >
                <h2>Sobre o Projeto</h2>  
              <span className="lastline"></span>
            </div>
            <div className="description_about">
              <p>Este projeto foi desenvolvido utilizando HTML, CSS, JAVASCRIPT, REACT, FIREBASE para a construção da interface do usuário, proporcionando uma experiência fluida e responsiva em diversas plataformas e dispositivos. Cada detalhe foi cuidadosamente projetado no Figma, garantindo uma experiência visualmente atraente e intuitiva. dev ~ Daniel Rocha</p>
            </div>
         </aside>

      <aside className="about_section">
        <div className="title_about">
        
              <span className="firstline"></span >
                <h2>APIS e bibliotecas utilizadas</h2>  
              <span className="lastline"></span>
            </div>
            <div className="description_about">

              <h3>Bible API</h3>
              <p><a href="https://bible-api.com/" target='_blank'>Bible API</a>: Uma API que fornece acesso a textos bíblicos, versículos, traduções e outros recursos relacionados à Bíblia. Essa API permite que o "Caminho Digital da Bíblia" acesse e exiba conteúdo bíblico em sua plataforma.</p>
              <hr />
              <h3>Dicionário Aberto API</h3>
              <p><a href="https://api.dicionario-aberto.net/index.html" target='_blank'>Dicionário Aberto API</a>: Uma API que oferece acesso a definições de palavras em diversos idiomas. Com essa API, os usuários do "Caminho Digital da Bíblia" poderão buscar o significado de palavras diretamente na plataforma, enriquecendo sua experiência de estudo e compreensão.</p>
              <hr />
              <h3>SpeechSynthesis API</h3>
              <p><a href="https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis" target='_blank'>SpeechSynthesis API</a>: Uma API de síntese de voz fornecida pelos navegadores modernos. Com essa API, os usuários podem ouvir o conteúdo da Bíblia ou definições de palavras em voz alta, proporcionando uma experiência de aprendizado mais imersiva e acessível.</p>
              <hr />
              <h3>Web Storage API</h3>
              <p><a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API" target='_blank'>Web Storage AP</a>I: é uma ferramenta poderosa que permite armazenar dados de forma persistente no navegador do usuário. No "Caminho Digital da Bíblia", utilizamos a Web Storage API para oferecer uma experiência personalizada aos usuários, permitindo que eles salvem suas configurações, preferências de leitura e marcadores diretamente no navegador.</p>
              <h3>Font Awesome</h3>
              <p><a href="https://fontawesome.com/" target='_blank'>Font Awesome</a>: Uma biblioteca de ícones que oferece uma vasta coleção de ícones para serem usados em interfaces de usuário. Os ícones do Font Awesome são escaláveis, personalizáveis e podem ser facilmente integrados ao projeto, adicionando um toque visual moderno e profissional ao "Caminho Digital da Bíblia".</p>
              <hr />


            </div>
         </aside>

         <aside className="about_section">
        <div className="title_about">
        
              <span className="firstline"></span >
                <h2>Links</h2>  
              <span className="lastline"></span>
            </div>
            <div className="description_about">
                <a href="https://github.com/Dannick10/bibleapi" target='_blank' className='des_link'>
              <button>
                  Github
                  </button>
                  </a>

                  <a href="https://www.linkedin.com/in/futurodevdaniel/" target='_blank' className='des_link'>
              <button>
              Linkedin
                  </button>
                  </a>  
            </div>
         </aside>

      
      </section>


    </main>
  )
}

export default Sobre