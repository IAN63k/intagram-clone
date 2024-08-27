import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EditProfile from '../components/profile/EditProfile'

function AppRouter() {
    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<EditProfile />} />
            </Routes>
        </BrowserRouter>

    )
}

export default AppRouter