import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Profile from '../components/profile/Profile'

function AppRouter() {
    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Profile />} />
            </Routes>
        </BrowserRouter>

    )
}

export default AppRouter