import React, { useEffect, useState } from 'react'
import { useAuthentication } from '../../hooks/useAuthentication'

const Forgotpassword = () => {

    const {resetPassword, loading, error:errorMessage} = useAuthentication()
    const [error,SetError] = useState('')
    const [email,SetEmail] = useState('')

    const handleResetPassword = (e) => {
      e.preventDefault()

      SetError('')

      SetError('Digite seu Email')

        const user = {
            email
        }

        if(!email){
          return
        }
        resetPassword(user.email)
    }

    useEffect(() => {
      SetError(errorMessage)
    },[errorMessage])

  return (
    <div className='register'>
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
              {!loading && (
                <input className='btn' type="submit" value="Redefinir senha" onClick={handleResetPassword}/>
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
               <h1>Redefinir senha</h1>
               <div className='texts_form'>
                 <p></p>
                 <p>Por favor, faça login para acessar sua conta e continuar sua jornada espiritual conosco.</p>
               </div>
             </div>
           </div>
         </section>

    </div>
  )
}

export default Forgotpassword