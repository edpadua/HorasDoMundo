import React from 'react'

import styles from './ListaHoras.module.css';
import CardHoras from '../CardHoras';
import Entrada from '../Entrada';

import { useState } from "react";

function ListaHoras() {

    const cityTimezones = require('city-timezones');

    

    const [horarios, setHorarios] = useState([
        {
            cidade: "Paris",
            pais: "França",
            timezone: "Europe/Paris"
        }
    ]);

    const addHorario = cidade => {
        console.log("cidade ",cidade)

        const cityLookup = cityTimezones.lookupViaCity(cidade)
        var newHorarios = horarios

        console.log("cityLookup ",cityLookup)
        console.log("cidade", cidade)
        cityLookup.map((local, index) => (
            newHorarios = [...newHorarios, { cidade: local.city, pais: local.iso3, timezone: local.timezone }]
           
        ))
        setHorarios(newHorarios)
    };


    const removeHorario = index => {
        const newHorarios = [...horarios];

        newHorarios.splice(index, 1);

        setHorarios(newHorarios);

    };

    return (
        <>
            <Entrada addHorario={addHorario} />
            { console.log("Horarios", horarios)}
            <div className={styles.lista}>
               

                {horarios.map((horario, index) => (
                    <CardHoras horario={horario} index={index} removeHorario={removeHorario}/>
                ))}
            </div>
        </>

    )
}

export default ListaHoras
