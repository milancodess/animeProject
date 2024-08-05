const axios = require('axios');
const API_BASE_URL = 'https://api.jikan.moe/v4';

async function fetchAnimeReviews(id) {
    try {
        const response = await axios.get(`${API_BASE_URL}/anime/${id}/reviews`);
        return response.data;
    } catch (error) {
        console.error('Error fetching anime reviews:', error);
        throw error;
    }
}

async function fetchMangaReviews(id) {
    try {
        const response = await axios.get(`${API_BASE_URL}/manga/${id}/reviews`);
        return response.data;
    } catch (error) {
        console.error('Error fetching manga reviews:', error);
        throw error;
    }
}

module.exports = { fetchAnimeReviews, fetchMangaReviews };