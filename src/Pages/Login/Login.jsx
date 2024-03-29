import React from 'react'
import styles from './Login.module.css'

const Login = () => {
  return (
    <div className='register'>
          <h1>Entre na conta</h1>
         <section className='register_main'>  
           <form className='form login'>
             <label>
               <span>Email</span>
               <input type="email" placeholder='endereço de email' />
             </label>
             <label>
               <span>Senha</span>
               <input type="password" placeholder='senha'/>
             </label>
             <label>
              <input className='btn' type="submit" value="Entrar" />
             </label>
           </form>
           <div className='form showcase'>
             <div className='showcase_text'>
               <h1>Bem-vindo de volta!</h1>
               <div className='texts_form'>
                 <p>Estamos felizes por você estar aqui novamente.</p>
                 <p>Por favor, faça login para acessar sua conta e continuar sua jornada espiritual conosco.</p>
               </div>
             </div>
           </div>
         </section>

    </div>
  )
}

export default Login