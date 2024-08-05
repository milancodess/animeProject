const axios = require('axios');
const API_BASE_URL = 'https://api.jikan.moe/v4';

async function fetchStudioDetails(id) {
    try {
        const response = await axios.get(`${API_BASE_URL}/producers/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching studio details:', error);
        throw error;
    }
}

module.exports = { fetchStudioDetails };