import React from 'react'

import styles from './CardHoras.module.css';

import Clock from 'react-live-clock';

import { useEffect, useState } from "react";

import { Button, Toast } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';


function CardHoras({ cidade, index, removeHorario }) {

    const [localData, setLocalData] = useState();

    const [timezone, setTimeZone] = useState('US/Pacific')

    const [show, setShow] = useState(false);

    const cityTimezones = require('city-timezones');

    console.log("cidade ",cidade)

    const cityLookup = cityTimezones.lookupViaCity(cidade)

    console.log("cidades ",cityLookup)
    
    useEffect(() => {
        
        if(cityLookup[0]==null){
            setShow(true)
        }

      }, [setShow]);
    

    if(cityLookup[0]!=null)
        return (
        <div className={styles.card}>
            <h2>{cityLookup[0].city}, {cityLookup[0].iso3}</h2>
            <h3>Hora local: <Clock format={'HH:mm:ss'} ticking={true} timezone={cityLookup[0].timezone} /></h3>
            <div>
                <Button variant="outline-danger" onClick={() => removeHorario(index)}>Remove</Button>
            </div>
        </div>
    )
    else
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
}

export default CardHoras
