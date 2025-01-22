import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { updateArtist, getArtists } from '../services/api';
import './ArtistUpdate.css';

const ArtistUpdate = () => {
    const navigate = useNavigate();
    const [artists, setArtists] = useState([]);
    const [selectedArtist, setSelectedArtist] = useState(null);
    const [search, setSearch] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        getArtists().then((response) => {
            setArtists(response.data);
        }).catch(error => console.error('Error fetching artists:', error));
    }, []);

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };

    const handleSelectArtist = (artist) => {
        setSelectedArtist(artist);
        setIsModalOpen(true);
    };

    const handleChange = (e) => {
        setSelectedArtist({ ...selectedArtist, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateArtist(selectedArtist.id, selectedArtist).then(() => {
            navigate('/');
            setIsModalOpen(false);
        }).catch(error => console.error('Error updating artist:', error));
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedArtist(null);
    };

    return (
        <div>
            <h2>Edit Artist</h2>
            <input
                type="text"
                placeholder="Search artist by name"
                value={search}
                onChange={handleSearchChange}
            />
            <ul>
                {artists.filter(a => a.artist_name.toLowerCase().includes(search.toLowerCase())).map((artist) => (
                    <li 
                        key={artist.id} 
                        onClick={() => handleSelectArtist(artist)} 
                        className="artist-item"
                    >
                        {artist.artist_name}
                    </li>
                ))}
            </ul>
            {isModalOpen && selectedArtist && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <span className="close-button" onClick={closeModal}>&times;</span>
                        <form onSubmit={handleSubmit}>
                            <label>Name:</label>
                            <input type="text" name="artist_name" value={selectedArtist.artist_name} onChange={handleChange} required />

                            <label>Genre:</label>
                            <input type="text" name="main_genre" value={selectedArtist.main_genre} onChange={handleChange} />

                            <label>Discography Link:</label>
                            <input type="url" name="discografy" value={selectedArtist.discografy} onChange={handleChange} />

                            <label>City:</label>
                            <input type="text" name="city" value={selectedArtist.city} onChange={handleChange} />

                            <label>State:</label>
                            <input type="text" name="state" value={selectedArtist.state} onChange={handleChange} maxLength="2" />

                            <label>Contact Link:</label>
                            <input type="url" name="contact" value={selectedArtist.contact} onChange={handleChange} />

                            <button type="submit">Update Artist</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ArtistUpdate;