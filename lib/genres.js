const axios = require('axios');
const API_BASE_URL = 'https://api.jikan.moe/v4';

async function fetchAnimeGenres() {
    try {
        const response = await axios.get(`${API_BASE_URL}/genres/anime`);
        return response.data;
    } catch (error) {
        console.error('Error fetching anime genres:', error);
        throw error;
    }
}

async function fetchMangaGenres() {
    try {
        const response = await axios.get(`${API_BASE_URL}/genres/manga`);
        return response.data;
    } catch (error) {
        console.error('Error fetching manga genres:', error);
        throw error;
    }
}

module.exports = { fetchAnimeGenres, fetchMangaGenres };