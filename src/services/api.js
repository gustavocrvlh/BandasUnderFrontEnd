import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/artists/'; // URL da API Django

export const getArtists = () => axios.get(API_URL);
export const createArtist = (artist) => axios.post(API_URL, artist);
export const updateArtist = (id, artist) => axios.put(`${API_URL}${id}/`, artist);
export const deleteArtist = (id) => axios.delete(`${API_URL}${id}/`);