import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Importa axios

function Crear() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [contraseña, setPassword] = useState('');
  const [error, setError] = useState(null); // Estado para manejar errores
  const navigate = useNavigate();

  const Eventos = async (e) => {
    e.preventDefault();

    try {
      // Enviar datos al backend usando axios
      await axios.post('http://localhost:3004/registros', {
        nombre,
        email,
        password: contraseña
      });

      // Limpiar los campos del formulario
      setNombre('');
      setEmail('');
      setPassword('');

      // Redirigir al login
      navigate('/login');
    } catch (err) {
      // Manejar errores
      setError('No se pudo registrar el usuario. Inténtalo de nuevo.');
      console.error('Error al enviar los datos:', err);
    }
  };

  return (
    <div className="crear-container">
      <form onSubmit={Eventos} className="crear-form">
        <h1>Crear usuario</h1>
        {error && <div className="error-message">{error}</div>}
        <label htmlFor="nombre">Nombre:</label>
        <input 
          type="text" 
          id="nombre" 
          value={nombre} 
          onChange={(e) => setNombre(e.target.value)} 
          className="input-field"
        />
        <label htmlFor="email">Correo Electrónico:</label>
        <input 
          type="email" 
          id="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          className="input-field"
        />
        <label htmlFor="password">Contraseña:</label>
        <input 
          type="password" 
          id="password" 
          value={contraseña} 
          onChange={(e) => setPassword(e.target.value)} 
          className="input-field"
        />
        <button type="submit" className="submit-button">Registrarse</button>
      </form>
    </div>
  );
}

export default Crear;

