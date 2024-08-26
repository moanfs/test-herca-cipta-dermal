import axios from "axios";

const BASE_URL = import.meta.env.VITE_REST_API_URL;

export const getPayments = async (page = 1, limit = 10)=>{
    try {
        const response = await axios.get(`${BASE_URL}/pembayaran`,{
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

export const getPayment = async (paymentId)=>{
    try {
        const response = await axios.get(`${BASE_URL}/pembayaran/${paymentId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching data penjualan:', error);
        throw error;
    }
}


export const setPayment = async (paymentId, status)=>{
    try {
        const response = await axios.put(`${BASE_URL}/pembayaran/${paymentId}`, { status });
        console.log('Status Payment Updated:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching update status payment:', error);
        throw error;
    }
}
