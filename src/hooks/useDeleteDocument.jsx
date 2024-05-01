import { useState,useEffect,useReducer } from "react";
import {db} from '../../firebase/config'
import {doc, deleteDoc} from 'firebase/firestore'
import { useFetchDocuments } from "./useFetchDocuments";

const initialState = {
    loading: null,
    error: null
}


const DeletedReduce = (state,action) => {
    switch(action.type) {
        case "LOADING":
            return {loading:true, error: null}
            case "DELETED_DOC":
                return {loading:false, error: null}
                case "ERROR":
                    return {loading:false, error: action.payload}
                    default:
                        return state
                    }
                }
                
                export const useDeletedDocument = (docCollection) => {
                    
                    const [response, dispatch] = useReducer(DeletedReduce, initialState)
                    
                    const [cancelled,setCancelled] = useState(false)
                    
                    const checkCancelBeforeDispatch = (action) => {
                        if(!cancelled) {
                            dispatch(action)
                        }
                    }
                    
                    const deleteDocument = async (id) => {
                        
                        checkCancelBeforeDispatch({
                            type: 'LOADING',
                        })
                        
                        try    {
                            
                            const { documents: commentsUser, loading } = useFetchDocuments('comments')

                            const deleteDocument = await deleteDoc(doc(db, docCollection,id))

                            checkCancelBeforeDispatch({
                                type: "DELETED_DOC",
                                payload: deleteDocument
                            })
                            
                        }catch (error) {
                            
                            checkCancelBeforeDispatch({
                                type: 'ERROR',
                                payload: error.message
                            })
                            
                            console.log(error.message)

        }
    }

    useEffect(()=>{
        return () => setCancelled(true)
    },[])

    return { deleteDocument, response}
}