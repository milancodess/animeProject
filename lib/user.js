const axios = require('axios');
const API_BASE_URL = 'https://api.jikan.moe/v4';

async function fetchUserProfile(username) {
    try {
        const response = await axios.get(`${API_BASE_URL}/users/${username}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching user profile:', error);
        throw error;
    }
}

module.exports = { fetchUserProfile };