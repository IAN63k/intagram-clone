import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
<<<<<<< HEAD
import EditProfile from '../components/profile/EditProfile'
import Profile from '../components/profile/Profile'
=======
import HomeApp from '../components/HomeApp'
import PublicacionDetail from '../components/PublicacionDetail'
import Perfil from '../components/Perfil'
>>>>>>> 518c98c0621097ae9b34df0e92de1132c196bd2a

function AppRouter() {
    return (

        <BrowserRouter>
            <Routes>
<<<<<<< HEAD
                <Route path="/" element={<HomeApp />} />
                <Route path="/publicacion/:id" element={<PublicacionDetail />} />
                <Route path="/perfil" element={<Profile />} />
                <Route path="/registro" element={<Registro setCelular={setCelular} />} />
                <Route path="/verificar" element={<Verificar Celular={Celular} />} />
                <Route path="/crear" element={<Crear />} />
                <Route path="/login" element={<Login />} />
                <Route path="/editar" element={<EditProfile />} />
=======
            <Route path="/" element={<HomeApp/>} />
            <Route path="/publicacion/:id" element={<PublicacionDetail/>} />
            <Route path="/perfil" element={<Perfil/>} />
>>>>>>> 518c98c0621097ae9b34df0e92de1132c196bd2a
            </Routes>
        </BrowserRouter>

    )
}

export default AppRouter