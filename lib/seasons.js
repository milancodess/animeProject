const axios = require('axios');
const API_BASE_URL = 'https://api.jikan.moe/v4';

async function fetchSeasonalAnime(year, season) {
    try {
        const response = await axios.get(`${API_BASE_URL}/seasons/${year}/${season}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching seasonal anime:', error);
        throw error;
    }
}

module.exports = { fetchSeasonalAnime };