import React from 'react'
import styles from './Register.module.css'
import { useState } from 'react'

const Register = () => {

  const [displayName, SetDisplayName] = useState('')
  const [email,SetEmail] = useState('')
  const [password,SetPassword] = useState('')
  const [confirmpassword,SetConfirmPassword] = useState('')
  const [error,SetError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    SetError('')

    const user = { 
      displayName,
      email,
      password,
      confirmpassword
    }

    if(password !== confirmpassword){
      SetError('as Senhas precisam ser iguais')
      return
    }

    console.log(user)

  }

  const [viewpassword,SetViewPassword] = useState('password')
  return (
    <div className='register'>
          <h1>Crie conta</h1>
         <section className='register_main'>  
           <form className='form' onSubmit={handleSubmit}>
             <label>
               <span>Nome</span>
                 <input type="text" placeholder='nome' required onClick={(e)=>SetDisplayName(e.target.value)}/>
             </label>
             <label>
               <span>Email</span>
               <input type="email" placeholder='endereço de email' required onClick={(e)=>SetEmail(e.target.value)}/>
             </label>
             <label>
               <span>Senha</span>
               <input type={viewpassword == 'password'?'password':'text'} placeholder='senha' required  onClick={(e)=>SetPassword(e.target.value)} />
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
               <input type={viewpassword == 'password'?'password':'text'} placeholder='confirme a senha' required  onClick={(e)=>SetConfirmPassword(e.target.value)} />
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
             {error && (
              <div className='error'>
                {error}
              </div>
             )}
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