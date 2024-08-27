import React from 'react'
import { CiSearch } from 'react-icons/ci'
import { FaPlus } from 'react-icons/fa6'
import { IoIosNotifications } from 'react-icons/io'
import { IoHome } from 'react-icons/io5'
import styles from '../styles/navbar.module.css'
import { Link } from 'react-router-dom'

const AppNabBar = () => {
    return (
        <footer className={styles.piepagina}>
            <ul className={styles.lista}>
                <li className={styles.elemento}><button><IoHome/></button></li>
                <li className={styles.elemento}><button><CiSearch/></button></li>
                <li className={styles.elemento}><button><FaPlus/></button></li>
                <li className={styles.elemento}><button><IoIosNotifications /></button></li>
                <Link to={'/perfil'}><li className={styles.elemento}><button id={styles.img}><img src="https://res.cloudinary.com/semojicaf/image/upload/v1722869502/ropa/busp1front.png" alt="" /></button></li></Link>
            </ul>
        </footer>
    )
}

export default AppNabBar