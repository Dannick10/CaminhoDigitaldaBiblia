import styles from './DicionarioComponent.module.css'

import { useState } from 'react'
import { useURLfetch } from '../hooks/useURLfetch'

const DicionarioComponent = ({ url,SetdicionarioView }) => {


        const { data, loading, error } = useURLfetch(url);

        if(data == null) {
           
        }
        
    return (
            <>            
                 <div className={styles.dic}>
                     <div className={styles.dicionario}>
                                     <h2>Dicionario</h2>
                                     <span className={styles.close} onClick={()=>SetdicionarioView(false)}><i class="fa-solid fa-xmark"></i></span>
                                 {data == '' && (<div>não foi possivel achar a palavra</div>)}       
                                 {data && data.map((e, i) => (
                        <div key={i} className={styles.text} dangerouslySetInnerHTML={{ __html: e.xml }}></div>
                        ))}
                     </div>
                 </div>
                </>
    );
}


export default DicionarioComponent