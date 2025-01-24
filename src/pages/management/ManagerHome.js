import React from "react";
import { useNavigate } from "react-router-dom";


const ManagerHome = () => {
  
    const navigate = useNavigate();

    return (
      <div>
        <h1>pagina inicial adm</h1>
        <button onClick={() => navigate('/add-artist')}>Adicionar Artista</button>
        <button onClick={() => navigate('/edit-artist/')}>Editar Artista</button>
      </div>
    );
  }
  
  export default ManagerHome;