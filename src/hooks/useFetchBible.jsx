import { useContext } from "react";
import { FetchBibleContext } from "../Context/FetchBibleContext";

export const useFetchBible = () => {
    const context = useContext(FetchBibleContext)

    if(!context){
        console.log('sem contexto')
    }

    return context
}