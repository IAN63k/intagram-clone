import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeApp from '../components/HomeApp'
import PublicacionDetail from '../components/PublicacionDetail'
import Perfil from '../components/Perfil'

function AppRouter() {
    return (

        <BrowserRouter>
            <Routes>
            <Route path="/" element={<HomeApp/>} />
            <Route path="/publicacion/:id" element={<PublicacionDetail/>} />
            <Route path="/perfil" element={<Perfil/>} />
            </Routes>
        </BrowserRouter>

    )
}

export default AppRouter