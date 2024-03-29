import React from 'react'
import styles from './Register.module.css'
import { useState } from 'react'

const Register = () => {

  const [viewpassword,SetViewPassword] = useState('password')
  return (
    <div className='register'>
          <h1>Crie conta</h1>
         <section className='register_main'>  
           <form className='form'>
             <label>
               <span>Nome</span>
                 <input type="text" placeholder='nome' />
             </label>
             <label>
               <span>Email</span>
               <input type="email" placeholder='endereço de email' />
             </label>
             <label>
               <span>Senha</span>
               <input type={viewpassword == 'password'?'password':'text'} placeholder='senha' required  />
               <div className='visible'>
                {viewpassword == 'password'?(
                  <i className="fa-regular fa-eye-slash" onClick={()=>SetViewPassword('text')}></i>
                  ):(
                  <i className="fa-regular fa-eye" onClick={()=>SetViewPassword('password')}></i>
                )}
                </div>
             </label>
             <label>
               <span>Confirmar senha</span>
               <input type={viewpassword == 'password'?'password':'text'} placeholder='confirme a senha' required  />
               <div className='visible'>
                {viewpassword == 'password'?(
                  <i className="fa-regular fa-eye-slash" onClick={()=>SetViewPassword('text')}></i>
                  ):(
                  <i className="fa-regular fa-eye" onClick={()=>SetViewPassword('password')}></i>
                )}
                </div>
             </label>
             <label>
              <input className='btn' type="submit" value="Cadastrar" />
             </label>
           </form>
           <div className='form showcase'>
             <div className='showcase_text'>
               <h1>Bem-vindo ao lar espiritual! </h1>
               <div className='texts_form'>
                 <p>Estamos felizes em tê-lo conosco. Juntos, vamos explorar e compartilhar grandes experiências</p>
                 <p>Faça a sua conta para ter acesso a todas funcionalidades!</p>
               </div>
             </div>
           </div>
         </section>

    </div>
  )
}

export default Register