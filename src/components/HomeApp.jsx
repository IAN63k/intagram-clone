import React, { useEffect, useRef, useState } from 'react'
import AppNabBar from './AppNabBar'
import { CiHeart } from 'react-icons/ci'
import { LuMessagesSquare } from 'react-icons/lu'
import styles from '../styles/home.module.css'
import { getData } from '../helpers/Peticiones'
import { usersUrl } from '../helpers/Constantes'
//-------------------------------------------Importaciones para la card
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { FiMessageCircle } from 'react-icons/fi'
import { BsSend } from 'react-icons/bs'
import { GrSave } from 'react-icons/gr'
import { FaRegHeart } from 'react-icons/fa6'

const HomeApp = () => {

    const [Users, setUsers] = useState(null)
    const publicaciones = []


    useEffect(() => {

        const createData = async () => {
            const data = await getData(usersUrl)
            setUsers(data)
        }
        createData()

    }, [])
    console.log("Esta es la Data", Users)

    for (let index = 0; index < Users?.length; index++) {

        for (let i = 0; i < Users[index].posteos.length; i++) {
            publicaciones.push(Users[index].posteos[i])
        }
    }
    console.log(publicaciones)
    publicaciones.sort(function () {return Math.floor(Math.random*9) - 6 })

    return (
        <div className={styles.content}>
            <header className={styles.cabecera}>

                <img src="https://res.cloudinary.com/semojicaf/image/upload/v1724690690/profile/logo.png" alt="logo" style={{ height: "36px" }} />
                <div className={styles.mensajes}>
                    <button><CiHeart /></button>
                    <button><LuMessagesSquare /></button>
                </div>
            </header>
            <div className={styles.historias}>
                <img src="https://res.cloudinary.com/semojicaf/image/upload/v1722869504/ropa/buso2rev.png" alt="" />
                <img src="https://res.cloudinary.com/semojicaf/image/upload/v1722869503/ropa/buso2model.png" alt="" />
                <img src="https://res.cloudinary.com/semojicaf/image/upload/v1722869502/ropa/busp1front.png" alt="" />
            </div>
            <main className={styles.main}>
                {
                    publicaciones.map(publicacion => {
                        return (
                            <Card style={{ width: '20rem', borderRadius:"15px",overflow:"hidden",backgroundColor:"white" }}>
                                <Card.Img variant="top" src={publicacion.imgUrl} style={{width:"100%",height:"100%",objectFit:"cover"}}/>
                                <Card.Body style={{ display: "flex", justifyContent: "space-between", fontSize: "24px" }}>
                                    <div>
                                        <Card.Link href="#" style={{ color: "inherit", margin: "0 10px" }}><FaRegHeart /><span style={{fontSize:"10px",textDecoration:"none"}}>{publicacion.likes}</span></Card.Link>
                                        <Card.Link href="#" style={{ color: "inherit", margin: "0 10px" }}><FiMessageCircle /></Card.Link>
                                        <Card.Link href="#" style={{ color: "inherit", margin: "0 10px" }}><BsSend /></Card.Link>
                                    </div>
                                    <Card.Link href="#" style={{ color: "inherit", margin: "0 10px" }}><GrSave /></Card.Link>
                                </Card.Body>
                                <Card.Body style={{padding:"10px"}}>
                                    {
                                        Users.map((user,index) => {
                                            if (publicacion.id === index+1) {
                                                return(<Card.Title ><h4>{user.nombre}</h4></Card.Title>)                                                
                                            }
                                        })
                                    }
                                    
                                    <Card.Text style={{ display: "inline-block" }}>
                                        {publicacion.descripcion}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        )
                    })
                }


            </main>
            <AppNabBar />
        </div>
    )
}

export default HomeApp