import axios from "axios";

const BASE_URL = import.meta.env.VITE_REST_API_URL;

export const login = async (email, password)=>{
    try {
        const response = await axios.post(`${BASE_URL}/login`, {
            email: email,
            password: password
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching data login:', error);
        throw error;
    }
}

export const logout = () => {
    localStorage.removeItem('authToken');
}
