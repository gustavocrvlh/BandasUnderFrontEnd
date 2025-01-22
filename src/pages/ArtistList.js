import React, { useEffect, useState } from 'react';
import { getArtists } from '../services/api';


/*
Tem campo na tabela do banco de dados q ao
invés de estar vazio, ele tem um traço (-).
Então, se o valor for um traço, ele vai retornar N/A
Dps eu arrumo essa parada ai */
const formatValue = (value) => {
    return !value || value === '-' ? 'N/A' : value;
};

//Muda as URLs para mostrar só o domínio
const getDomainName = (url) => {
    try {
        const domain = new URL(url).hostname;
        return domain.replace('www.', '');
    } catch (error) {
        return 'Link Inválido';
    }
};

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

    return (
        <div>
            <h2>Lista de Bandas</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Gênero</th>
                        <th>Cidade</th>
                        <th>Estado</th>
                        <th>Discografia</th>
                        <th>Contato</th>
                    </tr>
                </thead>
                <tbody>
                    {artists.map((artist) => (
                        <tr key={artist.id}>
                            <td>{formatValue(artist.artist_name)}</td>
                            <td>{formatValue(artist.main_genre)}</td>
                            <td>{formatValue(artist.city)}</td>
                            <td>{formatValue(artist.state)}</td>
                            <td>
                                {artist.discografy && artist.discografy !== '-' ? (
                                    <a href={artist.discografy} target="_blank" rel="noopener noreferrer">
                                        {getDomainName(artist.discografy)}
                                    </a>
                                ) : 'N/A'}
                            </td>
                            <td>
                                {artist.contact && artist.contact !== '-' ? (
                                    <a href={artist.contact} target="_blank" rel="noopener noreferrer">
                                        {getDomainName(artist.contact)}
                                    </a>
                                ) : 'N/A'}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ArtistList;