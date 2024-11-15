import axios from 'axios';

const API_URL = 'http://localhost:3001'; // URL de ton API

export const fetchBooks = async () => {
    try {
        const response = await axios.get(`${API_URL}/books`);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la récupération des livres:', error);
        throw error;
    }
};
