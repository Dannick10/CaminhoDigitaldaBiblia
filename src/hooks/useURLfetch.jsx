import { useState, useEffect } from "react";

export const useURLfetch = (url) => {
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null); 
    const [data, setData] = useState(''); 

    useEffect(() => {
        
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                const dataRes = await response.json();
                setData(dataRes);
            } catch (error) {
                setError(error); 
                console.error('There was a problem:', error.message);
            } finally {
                setLoading(false); 
                
            }
        };

        fetchData();

 
        return () => {
          
        };
    }, [url]);


    return { data, loading, error };
};
