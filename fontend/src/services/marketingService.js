import axios from "axios";

const BASE_URL = import.meta.env.VITE_REST_API_URL;

export const getMarketing = async ()=>{
    try {
        const response = await axios.get(`${BASE_URL}/marketing`);
        return response.data;
    } catch (error) {
        console.error('Error fetching data komisi:', error);
        throw error;
    }
}
