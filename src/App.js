import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import ArtistForm from './pages/ArtistForm';
import ArtistList from './pages/ArtistList';
import ArtistUpdate from './pages/ArtistUpdate';
import '../src/styles/App.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/edit-artist/" element={<ArtistUpdate />} />
                <Route path="/add-artist" element={<ArtistForm />} />
                <Route path="/list-artists" element={<ArtistList />} />
            </Routes>
        </Router>
    );
}

export default App;