import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const evento = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('http://localhost:3004/registros');
      console.log('Datos recibidos:', response.data); // Verifica los datos

      // La respuesta es directamente un array de usuarios
      const usuarios = response.data;
      const usuario = usuarios.find(u => u.email === email && u.password === password);

      // Limpiar los campos del formulario
      setEmail('');
      setPassword('');

      if (usuario) {
        navigate('/inicio');
      } else {
        setError('Credenciales incorrectas.');
      }
    } catch (error) {
      console.error('Error al obtener los registros:', error);
      setError('Error al conectar con el servidor.');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={evento} className="login-form">
        <h1>Inicio de Sesión</h1>
        <label htmlFor="email">Correo Electrónico:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="input-field" />
        <label htmlFor="password">Contraseña:</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input-field" />
        <button type="submit" className="submit-button">Iniciar Sesión</button>
        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
}

export default Login;
