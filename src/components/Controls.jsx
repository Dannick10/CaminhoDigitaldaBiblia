import React from 'react'
import styles from './controls.module.css'
import { useState } from 'react'

import { useDeletedDocument } from '../hooks/useDeleteDocument'

const Controls = ({document,idcontrol}) => {

    const [viewMenu, SetViewMenu] = useState(false)
    const { deleteDocument } = useDeletedDocument(document)

    if(viewMenu){
     setTimeout(()=>{
          SetViewMenu(false)
        },2000)
      }
    

  return (
    <div className={styles.controls}>
    <span onClick={() => SetViewMenu(!viewMenu?true:false)}>
        <i className="fa-solid fa-ellipsis"></i>
     </span>

        {viewMenu && (
            <div className={styles.option}>
            <div onClick={() => deleteDocument(idcontrol)}><i class="fa-solid fa-trash"></i> <p>EXCLUIR</p></div>
            </div>          
        )}       
    </div>
  )
}

export default Controls