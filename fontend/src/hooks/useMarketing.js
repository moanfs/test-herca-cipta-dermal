import { useState, useEffect } from "react";
import { getMarketing } from "../services/marketingService";

const useMarketing =()=>{
    const [marketing, setMarketing] = useState([])

    useEffect(() =>{
        const fetchMarketing = async () => {
            try {
                const marketingData = await getMarketing();
                setMarketing(marketingData);
            } catch (error) {
                console.error('Error in useEffect:', error);
            }
        };
        fetchMarketing();

    },[])

    return marketing;
}
export default useMarketing