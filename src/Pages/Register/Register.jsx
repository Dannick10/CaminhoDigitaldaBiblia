import styles from './Register.module.css'
import { useState,useEffect } from 'react'
import { useAuthentication } from '../../hooks/useAuthentication'

const Register = () => {

  const [displayName, SetDisplayName] = useState('')
  const [email,SetEmail] = useState('')
  const [password,SetPassword] = useState('')
  const [confirmpassword,SetConfirmPassword] = useState('')
  const [error,SetError] = useState('')

  const {createUser, error: authError, loading} = useAuthentication()

  const handleSubmit = async (e) => {
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

    const res = await createUser(user)

    console.log(user)

  }

  useEffect(()=>{
    if(authError) {
      SetError(authError)
    }
  },[authError])

  const [viewpassword,SetViewPassword] = useState('password')
  return (
    <div className='register'>
          <h1>Crie conta</h1>
         <section className='register_main'>  
           <form className='form' onSubmit={handleSubmit}>

             <label>
               <span>Nome</span>
                 <input 
                 type='text'
                 name='name'
                 placeholder='nome'
                 required
                 value={displayName}
                 onChange={(e) => SetDisplayName(e.target.value)}
                 />
                
             </label>

             <label>
               <span>Email</span>
               <input 
               type="email" 
               placeholder='endereço de email' 
               required 
               value={email} 
               onChange={(e)=>SetEmail(e.target.value)}/>
             </label>

             <label>
               <span>Senha</span>
               <input
                type={viewpassword == 'password'?'password':'text'} 
                placeholder='senha' 
                required 
                value={password} 
                 onChange={(e)=>SetPassword(e.target.value)} />
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
               <input 
               type={viewpassword == 'password'?'password':'text'} 
               placeholder='confirme a senha' 
               required 
               value={confirmpassword}
               onChange={(e)=>SetConfirmPassword(e.target.value)} />
               <div className='visible'>
                {viewpassword == 'password'?(
                  <i className="fa-regular fa-eye-slash" onClick={()=>SetViewPassword('text')}></i>
                  ):(
                  <i className="fa-regular fa-eye" onClick={()=>SetViewPassword('password')}></i>
                )}
                </div>
             </label>

             <label>
              {!loading && (
                <input className='btn' type="submit" value="Cadastrar" />
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