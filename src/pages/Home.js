import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Bandas Underv1.0 (?)</h1>
            <button onClick={() => navigate('/add-artist')}>Adicionar Artista</button>
            <button onClick={() => navigate('/list-artists')}>Lista de Artistas</button>
            <button onClick={() => navigate('/edit-artist/')}>Editar Artista</button>
        </div>
    );
};

export default Home;