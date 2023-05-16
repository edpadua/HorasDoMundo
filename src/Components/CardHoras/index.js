import React from 'react'

import styles from './CardHoras.module.css';

import Clock from 'react-live-clock';

import { useEffect, useState } from "react";

import { Button, Toast } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';


function CardHoras({ horario, index, removeHorario }) {

    const [localData, setLocalData] = useState();

    const [timezone, setTimeZone] = useState('US/Pacific')

    const [show, setShow] = useState(false);

    
    
   { /**useEffect(() => {
        
        if(horario[0]==null){
            setShow(true)
        }

      }, [setShow]); **/}
    

    
        return (
        <div className={styles.card}>
            {console.log("horario",horario)}
            <h2>{horario.cidade}, {horario.pais}</h2>
            <h3>Hora local: <Clock format={'HH:mm:ss'} ticking={true} timezone={horario.timezone} /></h3>
            <div className={styles.btn_container}>
                <Button className={styles.button_remove} onClick={() => removeHorario(index)}>Remove</Button>
            </div>
        </div>
    )
        }
    export default CardHoras
    {/**else
    return(
        
        <Toast onClose={() => setShow(false)} show={show} delay={3000}>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
           
          </Toast.Header>
          <Toast.Body>{cidade} não está na lista !</Toast.Body>
        </Toast>

    )
}**/}


