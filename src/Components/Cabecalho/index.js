import React from 'react'

import styles from './Cabecalho.module.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import {FaRegClock} from 'react-icons/fa';

function Cabecalho() {
    return (
        <>
            <header className={styles.header_todo}>
                <nav className={styles.navbar}>
                    <div className={styles.navbar_container}>

                        <FaRegClock style={{ fontSize: '30px', color: "#ffffff" }} />

                    </div>
                </nav>
            </header>
        </>
    )
}

export default Cabecalho
