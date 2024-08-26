import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import codigos from '../data/codigos.json'; 

function Verificar({ Celular }) {
  const [codigo, setCodigo] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const eventos = (e) => {
    e.preventDefault();
    
    console.log('Celular ingresado:', Celular);
    console.log('Código ingresado:', codigo);

    // Formato correcto para el celular
    const usuario = codigos.find(usuario => usuario.Celular.trim() === Celular.trim());
    
    if (usuario && usuario.verificacion === codigo) {
      console.log('Código correcto');
      navigate('/crear'); 
    } else {
      console.log('Código incorrecto');
      setError('Validar nuevamente código.');
    }
  };

  const handleKeyPress = (e) => {
    // Permitir solo números y el signo de adición
    if (!/[0-9]/.test(e.key)) {
      e.preventDefault();
    }
  };

  return (
    <div className="verificacion-container">
      <form onSubmit={eventos} className="verificacion-form">
        <h1>Verificación</h1>
        <label htmlFor="verificacion">Código de Verificación:</label>
        <input 
          type="text" 
          id="verificacion" 
          value={codigo} 
          onChange={(e) => setCodigo(e.target.value)} 
          onKeyPress={handleKeyPress}
          maxLength="4" 
          inputMode="numeric"  // Muestra el teclado numérico en dispositivos móviles
          className="input-field"
        />
        <button type="submit" className="submit-button1">Verificar</button>
        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
}

export default Verificar;