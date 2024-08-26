import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Registro({ setCelular }) {
  const [telefono, setTelefono] = useState('');
  const navigate = useNavigate();

  const evento= (e) => {
    e.preventDefault();
    setCelular(telefono);
    navigate('/verificar'); 
  };

  const handleLoginRedirect = () => {
    navigate('/login');
  };

  return (
    <div className="registro-container">
    <div className="form-container">
      <h1>Sign in</h1>
      <p>Login or create an account with your phone number to start ordering</p>
      <form onSubmit={evento}>
        <label htmlFor="telefono">Ingrese su número celular:</label>
        <div className="input-group">
          <input type="text" id="telefono" value={telefono} onChange={(e) => setTelefono(e.target.value)} className="input-field"/>
        </div>      
        <button type="submit" className="submit-button">Enviar</button>
      </form>
      <button onClick={handleLoginRedirect} className="login-redirect-button">Si ya tiene cuenta, presione aquí</button>
    </div>
  </div>
    
  );
}

export default Registro;

