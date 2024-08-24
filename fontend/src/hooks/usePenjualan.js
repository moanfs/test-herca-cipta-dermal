import { useState, useEffect } from "react";
import { getPenjualan } from "../services/penjualanService";

const usePenjualan = (page = 1, limit = 10) => {
    const [penjualan, setPenjualan] = useState([]);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        const fetchPenjualan = async () => {
            try {
                const {data, last_page} = await getPenjualan(page, limit);
                setPenjualan(data || []);
                setTotalPages(last_page || 1);
            } catch (error) {
                console.error('Error in useEffect:', error);
            }
        };
        fetchPenjualan();
    }, [page, limit]);

    return { penjualan, totalPages };
}
export default usePenjualan;