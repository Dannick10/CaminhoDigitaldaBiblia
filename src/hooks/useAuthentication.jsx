import { setLogLevel } from 'firebase/app'
import { db } from '../../firebase/config'

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut
} from 'firebase/auth'


import { useState, useEffect } from 'react'

export const useAuthentication = () => {
    const [error,SetError] = useState(null)
    const [loading,SetLoading] = useState(null)

    const [cancelled,SetCancelled] = useState(false)
    
    const auth = getAuth()

    function checkiFisCancelled() {
        if (cancelled) {
            return
        }
    }

    const createUser = async (data) => {
        checkiFisCancelled()
        SetLoading(true)
        
        SetError('')
        try{

            const {user} = await createUserWithEmailAndPassword (
                auth,
                data.email,
                data.password
            )

            await updateProfile(user, {
                displayName: data.displayName
            })

            return user

        }catch (error){
            
            let systemErrorMessage

            if(error.message.includes("password")){
                systemErrorMessage = 'A senha precisa conter pelo menos 6 caracteres'
            } else if(error.message.includes('email-already')){
                systemErrorMessage = 'email já cadastrado'
            } else {
                systemErrorMessage = 'ocorreu um erro, por favor tente mais tarde.'
            }

            SetError(systemErrorMessage)

        }

        SetLoading(false)
    }

    const logout = () => {
        checkiFisCancelled()

        signOut(auth)
    }

    const login = async (data) => {
        checkiFisCancelled()

        SetLoading(true)
        SetError(false)

        try {
            await signInWithEmailAndPassword(auth, data.email, data.password)
            SetLoading(false)
        } catch (error) {

            let systemErrorMessage

            if(error.message.includes("user-not-found")){
                systemErrorMessage = 'Usuario não encontrado'
            } else if(error.message.includes('wrong-password')){
                systemErrorMessage = 'Senha incorreta'
            } else {
                systemErrorMessage = 'ocorreu um erro, por favor tente mais tarde.'
            }

            SetError(systemErrorMessage)
            SetLoading(false)
        }
    }

    useEffect(()=>{
        return () => SetCancelled(true)
    },[])

    return {
        auth,
        createUser,
        error,
        loading,
        logout,
        login
    }

}