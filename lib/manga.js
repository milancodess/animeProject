const axios = require('axios');
const API_BASE_URL = 'https://api.jikan.moe/v4';

async function fetchMangaData(query) {
    try {
        const response = await axios.get(`${API_BASE_URL}/manga`, {
            params: { q: query, limit: 10 }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching manga data:', error);
        throw error;
    }
}

async function fetchMangaDetails(id) {
    try {
        const response = await axios.get(`${API_BASE_URL}/manga/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching manga details:', error);
        throw error;
    }
}

module.exports = { fetchMangaData, fetchMangaDetails };