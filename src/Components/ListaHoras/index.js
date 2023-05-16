import React from 'react'

import styles from './ListaHoras.module.css';
import CardHoras from '../CardHoras';
import Entrada from '../Entrada';

import { useState } from "react";

function ListaHoras() {

    const [horarios, setHorarios] = useState([
        {
            cidade: "Paris",
        }
    ]);

    const addHorario = cidade => {
        console.log("cidade", cidade)
        const newHorarios = [...horarios, { cidade: cidade }];
        console.log("newHorarios", newHorarios)
        setHorarios(newHorarios);
    };


    const removeHorario = index => {
        const newHorarios = [...horarios];

        newHorarios.splice(index, 1);

        setHorarios(newHorarios);

    };

    return (
        <>
            <Entrada addHorario={addHorario} />
            <div className={styles.lista}>
               

                {horarios.map((horario, index) => (
                    <CardHoras cidade={horario.cidade} index={index} removeHorario={removeHorario}/>
                ))}
            </div>
        </>

    )
}

export default ListaHoras
