import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEamilAndPassword,
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

}