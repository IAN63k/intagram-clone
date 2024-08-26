import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeApp from '../components/HomeApp'

function AppRouter() {
    return (

        <BrowserRouter>
            <Routes>
            <Route path="/" element={<HomeApp/>} /> 
            </Routes>
        </BrowserRouter>

    )
}

export default AppRouter