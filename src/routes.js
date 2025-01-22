import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/Home';
import ArtistForm from './pages/ArtistForm';
import ArtistList from './pages/ArtistList';
import ArtistUpdate from './pages/ArtistUpdate';
import Login from './pages/Login';

const PrivateRoute = ({ element }) => {
    const token = localStorage.getItem('token');
    return token ? element : <Navigate to="/login" />;
};

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/list-artists" element={<ArtistList />} />
            <Route path="/login" element={<Login />} />
            <Route path="/edit-artist" element={<PrivateRoute><ArtistUpdate /></PrivateRoute>} />
            <Route path="/add-artist" element={<PrivateRoute><ArtistForm /></PrivateRoute>}/>
        </Routes>
    );
};

export default AppRoutes;