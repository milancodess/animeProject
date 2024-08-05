const axios = require('axios');
const API_BASE_URL = 'https://api.jikan.moe/v4';

async function fetchAnimeData(query) {
    try {
        const response = await axios.get(`${API_BASE_URL}/anime`, {
            params: { q: query, limit: 10 }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching anime data:', error);
        throw error;
    }
}

async function fetchAnimeDetails(id) {
    try {
        const response = await axios.get(`${API_BASE_URL}/anime/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching anime details:', error);
        throw error;
    }
}

async function fetchSeasonalAnime(year, season) {
    try {
        const response = await axios.get(`${API_BASE_URL}/seasons/${year}/${season}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching seasonal anime:', error);
        throw error;
    }
}

module.exports = { fetchAnimeData, fetchAnimeDetails, fetchSeasonalAnime };