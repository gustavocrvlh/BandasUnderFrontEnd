import React, { useEffect, useState } from 'react';
import { getArtists, deleteArtist } from '../services/api';

const ArtistList = () => {
    const [artists, setArtists] = useState([]);

    useEffect(() => {
        fetchArtists();
    }, []);

    const fetchArtists = async () => {
        try {
            const response = await getArtists();
            setArtists(response.data);
        } catch (error) {
            console.error('Erro ao buscar bandas:', error);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Deseja excluir esta banda?')) {
            await deleteArtist(id);
            fetchArtists();
        }
    };

    return (
        <div>
            <h2>Lista de Bandas</h2>
            <ul>
                {artists.map((artist) => (
                    <li key={artist.id}>
                        {artist.artist_name} | {artist.main_genre} | {artist.city} | {artist.state} | {artist.discografy} | {artist.contact}
                        <button onClick={() => handleDelete(artist.id)}>Excluir</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ArtistList;