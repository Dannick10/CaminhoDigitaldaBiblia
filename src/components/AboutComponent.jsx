import React from 'react'
import { useState } from 'react'

const AboutComponent = ({title,info,submit}) => {

    const [message,SetMessage] = useState()
    const [email,SetEmail] = useState()

    const handleSubmit = (e) =>{
        e.preventDefault()

        SetMessage('')
        SetEmail('')
    }

  return (
    <section className="about_main">
      
    <aside className="about_section">
      <div className="title_about">
      
        <span className="firstline"></span >
          <h2>{title}</h2>  
        <span className="lastline"></span>
      </div>
       
      <div className="description_about">
        <p>{info}</p>
      </div>
    {submit && (
        <div>
        <form className='about_submit' onSubmit={handleSubmit}>

            <label>
                <div>EMAIL</div>
                <input type="email" required="on" placeholder='Digite seu email' value={email} onChange={(e)=>SetEmail(e.target.value)}/>
            </label>

            <label>
                <div>Mensagem</div>
                <textarea cols="30" rows="10" required="on" placeholder='Nós envie mensagem por aqui' value={message} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" onChange={(e)=>{SetMessage(e.target.value)}}></textarea>
            </label>
            <input type="submit" value="Enviar" />
        </form>
      </div>
          )}

    </aside>
  </section>
  )
}

export default AboutComponent