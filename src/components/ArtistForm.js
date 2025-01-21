import React, { useState } from 'react';
import { createArtist } from '../services/api';

const ArtistForm = () => {
    const [artist, setArtist] = useState({
        artist_name: '',
        main_genre: '',
        discografy: '',
        city: '',
        state: '',
        contact: ''
    });

    const handleChange = (e) => {
        setArtist({ ...artist, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createArtist(artist);
            alert('Artista adicionado com sucesso!');
            setArtist({ artist_name: '', main_genre: '', discografy: '', city: '', state: '', contact: '' });
        } catch (error) {
            console.error('Erro ao adicionar artista:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="artist_name" placeholder="Nome do Artista" value={artist.artist_name} onChange={handleChange} />
            <input type="text" name="main_genre" placeholder="Gênero Principal" value={artist.main_genre} onChange={handleChange} />
            <input type="url" name="discografy" placeholder="Discografia (URL)" value={artist.discografy} onChange={handleChange} />
            <input type="text" name="city" placeholder="Cidade" value={artist.city} onChange={handleChange} />
            <input type="text" name="state" placeholder="Estado" value={artist.state} onChange={handleChange} />
            <input type="url" name="contact" placeholder="Contato (URL)" value={artist.contact} onChange={handleChange} />
            <button type="submit">Adicionar Artista</button>
        </form>
    );
};

export default ArtistForm;