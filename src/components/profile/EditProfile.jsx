import React, { useState } from 'react'
import { Header, Container, MainEdit, } from '../../styles/profile'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';


function EditProfile(user) {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submit');
    }

    return (
        <Container>
            <Header>
                <nav>
                    <ul>
                        <li><ArrowBackIosNewIcon /></li>
                        <li><span>...</span></li>
                    </ul>
                </nav>
            </Header>
            <MainEdit>
                <h2>Configuración de perfil</h2>
                <form onSubmit={handleSubmit} className='form_editProfile'>
                    <div>
                        <span>Nombre: </span><input type="text" value={user.nombre} placeholder="Nombre" />
                    </div>
                    <div>
                        <span>Correo: </span><input type="email" value={user.email} placeholder="Correo" />
                    </div>
                    <div>
                        <span>contraseña: </span><input type="password" value={user.nombre} placeholder="Contraseña" />
                    </div>
                    <div>
                        <span>Descripción: </span><textarea value={user.descripcion} placeholder="Descripción" />
                    </div>
                    <div>
                        <span>Foto de perfil: </span><input type="file" value={user.nombre} placeholder="Foto de perfil" />
                    </div>
                    <div>
                        <span>Banner: </span><input type="file" value={user.nombre} placeholder="Banner" />
                    </div>

                </form>
            </MainEdit>
        </Container>
    )
}

export default EditProfile