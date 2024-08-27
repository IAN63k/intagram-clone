import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EditProfile from '../components/profile/EditProfile'
import Profile from '../components/profile/Profile'

function AppRouter() {
    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeApp />} />
                <Route path="/publicacion/:id" element={<PublicacionDetail />} />
                <Route path="/perfil" element={<Profile />} />
                <Route path="/registro" element={<Registro setCelular={setCelular} />} />
                <Route path="/verificar" element={<Verificar Celular={Celular} />} />
                <Route path="/crear" element={<Crear />} />
                <Route path="/login" element={<Login />} />
                <Route path="/editar" element={<EditProfile />} />
            </Routes>
        </BrowserRouter>

    )
}

export default AppRouter