import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Home from '../pages/user_pages/UserHome';
import ArtistList from '../pages/user_pages/UserArtistList';
import SuggestionForm from '../pages/user_pages/UserSuggestionForm';
import Login from '../pages/management/ManagerLogin';
import ManagerHome from '../pages/management/ManagerHome';
import ArtistForm from '../pages/management/ManagerArtistForm';
import ArtistUpdate from '../pages/management/ManagerArtistUpdate';

const PrivateRoute = ({ children }) => {
    const token = localStorage.getItem('token');
    return token ? children : <Navigate to="/login" />;
};

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/list-artists" element={<ArtistList />} />
            <Route path="/suggestion" element={<SuggestionForm />} />
            <Route path="/login" element={<Login />} />
            <Route path="/manager-home" element={<PrivateRoute><ManagerHome /></PrivateRoute>} />
            <Route path="/edit-artist" element={<PrivateRoute><ArtistUpdate /></PrivateRoute>} />
            <Route path="/add-artist" element={<PrivateRoute><ArtistForm /></PrivateRoute>}/>
        </Routes>
    );
};

export default AppRoutes;