import React from 'react'
import { Header, ProfileInfo, Container, SectionInfo, ContainerInfo, SectionPhotos } from '../../styles/profile'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

function Profile(user, posteos) {

    // const handlePosteo = (e) => {
    //     console.log(e.target.id)
    //     // abir modal con la imagen || abrir en publicaciones
    // }

    const handleFollow = () => {
        console.log('Follow');
        // user.seguidores += 1;
        // if (user.seguidos.includes('user')) {
        //     user.seguidos = user.seguidos.filter(seguido => seguido !== 'user');
        //     return;
        // }
    }

    const handleMessage = () => {
        console.log('Message');
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
                <figure>
                    {/* <img src={user.imgHeader} alt="Imagen de cabecera" /> */}
                    <img src="https://cdn.superaficionados.com/imagenes/1-integrantes-de-blackpink-jennie-0-cke.jpg" alt="Imagen de cabecera" />
                </figure>
            </Header>
            <main>
                <SectionInfo>
                    <ContainerInfo>
                        <div className='div-data'>
                            {/* <h3>{user.seguidores}</h3> */}
                            <h3>10.7M</h3>
                            <p>Followers</p>
                        </div>
                        <ProfileInfo>
                            <figure>
                                {/* <img src="user.imgUrl" alt="user-image" /> */}
                                <img src="https://i.scdn.co/image/ab6761610000e5ebd95cf4457fac4cc62311f84f" alt="user-image" />
                            </figure>
                            {/* <h3>{user.nombre}</h3> */}
                            <h3>Jennie Kim</h3>
                            {/* <p id='description'>{user.descripcion}</p> */}
                            <p id='description'>I'm a member of Blackpink</p>
                        </ProfileInfo>
                        <div className='div-data'>
                            {/* <h3>{user.likes}</h3> */}
                            <h3>108.3 M</h3>
                            <p>likes</p>
                        </div>
                    </ContainerInfo>
                    <div className='div__actions-acount'>
                        <button onClick={handleFollow}>Follow</button>
                        <button onClick={handleMessage}>Message</button>
                    </div>
                </SectionInfo>
                <SectionPhotos>
                    <h3>Photos</h3>
                    <div>
                        <figure>
                            <img src="https://i.pinimg.com/564x/4f/d6/66/4fd666f2db14bb6280c83822380a0f71.jpg" alt="" />
                        </figure>
                        <figure>
                            <img src="https://i.pinimg.com/564x/6d/aa/17/6daa17d6af6bc410574db866f31f304b.jpg" alt="" />
                        </figure>
                        <figure>
                            <img src="https://i.pinimg.com/564x/f0/8d/bb/f08dbbbeb49a559b445df653bf1e3a80.jpg" alt="" />
                        </figure>
                        <figure>
                            <img src="https://i.pinimg.com/564x/a0/b2/2d/a0b22d988c49953d08df3d226ef27c8b.jpg" alt="" />
                        </figure>
                        <figure>
                            <img src="https://i.pinimg.com/736x/3f/cd/17/3fcd1785622d5eea86a236d9ad795fba.jpg" alt="" />
                        </figure>

                        {/* {
                            posteos.map(post => (
                                <figure key={post.id}>
                                    <img src={post.imgUrl} alt="" id={post.id} onClick={handlePosteo} />
                                </figure>
                            ))
                        } */}

                    </div>
                </SectionPhotos>
            </main>
        </Container>
    )
}

export default Profile