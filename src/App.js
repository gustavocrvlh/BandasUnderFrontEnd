import React from 'react';

import ArtistForm from './components/ArtistForm';
import ArtistList from './components/ArtistList';

function App() {
    return (
        <div>
            <h1>Portal Underground BR</h1>
            <ArtistForm />
            <ArtistList />
        </div>
    );
}

export default App;