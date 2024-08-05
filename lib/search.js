const axios = require('axios');
const API_BASE_URL = 'https://api.jikan.moe/v4';

async function search(type, query) {
    try {
        const response = await axios.get(`${API_BASE_URL}/search/${type}`, {
            params: { q: query, limit: 10 }
        });
        return response.data;
    } catch (error) {
        console.error('Error performing search:', error);
        throw error;
    }
}

module.exports = { search };