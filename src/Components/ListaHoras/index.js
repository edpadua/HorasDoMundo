import React from 'react'

import styles from './ListaHoras.module.css';
import CardHoras from '../CardHoras';

function ListaHoras() {
  return (
    <div className={styles.lista}>
        <CardHoras cidade={'Paris'}/>
    </div>
  )
}

export default ListaHoras
