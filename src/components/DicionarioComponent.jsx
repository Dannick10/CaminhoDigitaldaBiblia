import styles from './DicionarioComponent.module.css'

import { useState } from 'react'
import { useURLfetch } from '../hooks/useURLfetch'

const DicionarioComponent = ({ url }) => {
    console.log(url);

    const { data, loading, error } = useURLfetch(url);
    console.log(data);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    return (
        <div className={styles.dicionario}>
            <h2>Dicionario</h2>
            {data == '' && (<div>não foi possivel achar a palavra</div>)}
            {data && data.map((e, i) => (
                <div key={i} className={styles.text} dangerouslySetInnerHTML={{ __html: e.xml }}></div>
            ))}
        </div>
    );
}


export default DicionarioComponent