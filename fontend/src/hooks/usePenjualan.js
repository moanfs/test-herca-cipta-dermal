import { useState, useEffect } from "react";
import { getPenjualan } from "../services/penjualanService";

const usePenjualan = (page = 1, limit = 10) => {
    const [penjualan, setPenjualan] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    const [totalItems, setTotalItems] = useState(0);

    useEffect(() => {
        const fetchPenjualan = async () => {
            try {
                const {data, last_page, total } = await getPenjualan(page, limit);
                setPenjualan(data || []);
                setTotalPages(last_page || 1);
                setTotalItems(total || 0);
            } catch (error) {
                console.error('Error in useEffect:', error);
            }
        };
        fetchPenjualan();
    }, [page, limit]);

    return { penjualan, totalPages, totalItems };
}
export default usePenjualan;