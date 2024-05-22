import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './Login.module.css'
import { useAuthentication } from '../../hooks/useAuthentication'

const Login = () => {

  const [email,SetEmail] = useState('')
  const [password,SetPassword] = useState('')
  const [error,SetError] = useState('')

  const {login, error: authError, loading} = useAuthentication()

  const handleSubmit = async (e) => {
    e.preventDefault()

    SetError('')

    const user = { 
      email,
      password,
    }

    const res = await login(user)

  }

  useEffect(()=>{
    if(authError) {
      SetError(authError)
    }
  },[authError])

  const [viewpassword,SetViewPassword] = useState('password')

  return (
    <div className='register' onSubmit={handleSubmit}>
          <h1>Entre na conta</h1>
         <section className='register_main'>  
           <form className='form login'>

             <label>
               <span>Email</span>
               <input
               type="email" 
               placeholder='endereço de email' 
               required
               value={email}
               onChange={(e)=>{SetEmail(e.target.value)}}
               />
             </label>
             <label>
              
               <span>Senha</span>
               <input 
               type={viewpassword == 'password'?'password':'text'} 
               placeholder='senha' 
               required  
               value={password}
               onChange={(e)=>SetPassword(e.target.value)}
               />

              <Link to='/forgotpassword' className={styles.link}>
              <span className={styles.forgot}>Esqueci a senha</span>
              </Link> 
               
               <div className='visible'>
                {viewpassword == 'password'?(
                  <i className="fa-regular fa-eye-slash" onClick={()=>SetViewPassword('text')} style={{color:'black'}}></i>
                  ):(
                  <i className="fa-regular fa-eye" onClick={()=>SetViewPassword('password')}></i>
                )}
                </div>
             </label>
             
             <label>
              {!loading && (
                <input className='btn' type="submit" value="Entrar" />
              )}
              {loading &&(
              <input className='disabled_btn' type="submit" value="Aguarde" />
              )}

             </label>
             {error && (
              <div className='error'>
                {error}
              </div>
             )}

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