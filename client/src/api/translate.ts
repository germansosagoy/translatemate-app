import axios from 'axios'

const API_URL = 'http://localhost:5000/translate';

export const translate = async (text: string) => {
    try {
        const response = await axios.post(API_URL, {text});
        return response.data;
    } catch (error) {
        console.error('Error al traducir el text:', error);
        throw error;
    }
}