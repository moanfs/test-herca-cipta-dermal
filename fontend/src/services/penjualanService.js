import axios from "axios";

const BASE_URL = import.meta.env.VITE_REST_API_URL;

export const getPenjualan = async (page = 1, limit = 10)=>{
    try {
        const response = await axios.get(`${BASE_URL}/penjualan`,{
            params: { page, limit }
        });
        // return response.data;
        return {
            data: response.data.data,
            last_page: response.data.last_page,
            total: response.data.total,
        };
    } catch (error) {
        console.error('Error fetching data penjualan:', error);
        throw error;
    }
}

export const postPenjualan = async (data)=>{
    try {
        const response = await axios.post(`${BASE_URL}/penjualan`, data);
        return response.data;
    } catch (error) {
        console.error('Error fetching data penjualan:', error);
        throw error;
    }
}
