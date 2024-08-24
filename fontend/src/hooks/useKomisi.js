import { useState, useEffect } from "react";
import { getKomisi } from "../services/komisiService";

const useKomisi =()=>{
    const [komisi, setKomisi] = useState([])

    useEffect(() =>{
        const fetchKomisi = async () => {
            try {
                const komisiData = await getKomisi();
                setKomisi(komisiData.data);
            } catch (error) {
                console.error('Error in useEffect:', error);
            }
        };
        fetchKomisi();

    },[])

    return komisi;
}
export default useKomisi