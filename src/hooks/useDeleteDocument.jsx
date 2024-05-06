import { useState, useEffect, useReducer } from "react"
import { db } from '../../firebase/config'
import { doc, deleteDoc, collection, query, where, getDocs } from 'firebase/firestore'

const initialState = {
    loading: false,
    error: null
}

const deletedReducer = (state, action) => {
    switch(action.type) {
        case "LOADING":
            return { loading: true, error: null }
        case "DELETED_DOC":
            return { loading: false, error: null }
        case "ERROR":
            return { loading: false, error: action.payload }
        default:
            return state
    }
};

export const useDeletedDocument = (docCollection) => {
    const [response, dispatch] = useReducer(deletedReducer, initialState)
    const [cancelled, setCancelled] = useState(false);

    const checkCancelBeforeDispatch = (action) => {
        if (!cancelled) {
            dispatch(action)
        }
    };

    const deleteDocument = async (id) => {
        checkCancelBeforeDispatch({ type: 'LOADING' })
        try {
            if (docCollection === 'posts') {
                const commentsQuery = query(collection(db, 'comments'), where("post", "==", id))
                const commentsSnapshot = await getDocs(commentsQuery)
                commentsSnapshot.forEach(async (doc) => {
                    await deleteDoc(doc.ref)
                });
            }
            await deleteDoc(doc(db, docCollection, id))
            checkCancelBeforeDispatch({ type: "DELETED_DOC", payload:deleteDocument })
        } catch (error) {
            checkCancelBeforeDispatch({
                type: 'ERROR',
                payload: error.message
            })
            console.error(error.message)
        }
    }

    useEffect(() => {
        return () => setCancelled(true)
    }, [])

    return { deleteDocument, response }
}
