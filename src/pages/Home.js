import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Bem-vindo ao Portal Underground BR</h1>
            <button onClick={() => navigate('/add-artist')}>Adicionar Artista</button>
            <button onClick={() => navigate('/list-artists')}>Lista de Artistas</button>
            <button onClick={() => navigate('/edit-artist/')}>Editar Artista</button>
        </div>
    );
};

export default Home;