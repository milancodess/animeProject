const axios = require('axios');
const API_BASE_URL = 'https://api.jikan.moe/v4';

async function fetchCharacterDetails(id) {
    try {
        const response = await axios.get(`${API_BASE_URL}/characters/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching character details:', error);
        throw error;
    }
}

module.exports = { fetchCharacterDetails };