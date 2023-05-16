import React from 'react'

import styles from './Entrada.module.css';

import { Button, Card, Form } from 'react-bootstrap';

import { useEffect, useState } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

function Entrada({addHorario}) {
  
    const [value, setValue] = React.useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        var semAcento=value.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
        addHorario(semAcento);
        setValue("");
      };

  return (
        <Form className={styles.form_adicionar} onSubmit={handleSubmit}>
            <Form.Group className={styles.form_group_adicionar}>
                
                <Form.Control type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Adicionar novo horário" />
            </Form.Group>
            <Button className={styles.button_add} type="submit">
                Adicionar
            </Button>
        </Form>
  )
}

export default Entrada
