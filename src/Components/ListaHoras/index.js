import React from 'react'

import styles from './ListaHoras.module.css';
import CardHoras from '../CardHoras';

function ListaHoras() {
  return (
    <div className={styles.lista}>
        <CardHoras cidade={'Paris'}/>
        <CardHoras cidade={'Houston'}/>
        <CardHoras cidade={'São Paulo'}/>
    </div>
  )
}

export default ListaHoras
