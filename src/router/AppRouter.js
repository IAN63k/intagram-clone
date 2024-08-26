import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Registro from '../components/Registro.js';
import Verificar from '../components/Verificar.js';
import Crear from '../components/Crear.js';
import Login from '../components/Login.js';

function AppRouter() {
    const [Celular, setCelular] = useState('');

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/registro" />} />
                <Route path="/registro" element={<Registro setCelular={setCelular} />} />
                <Route path="/verificar" element={<Verificar Celular={Celular} />} />
                <Route path="/crear" element={<Crear />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;
