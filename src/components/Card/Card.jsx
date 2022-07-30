import React from 'react';
import styles from './Card.module.css'


const Card = ({name, height, mass, homeworld, id, src}) => {

  return (
    <li id={id} className={styles.card}>
      <img className={styles.cardImg} 
        src={`https://starwars-visualguide.com/assets/img/characters/${(id+1)+((src-1)*10)}.jpg`} 
        alt={name}/>
      <p className={styles.info}>
        <span className={styles.cardName}>{name}</span>
        <span className={styles.cardName}>Рост: {height} см</span>
        <span className={styles.cardName}>Масса: {mass} кг</span>
        <span className={styles.cardName}>Планета: {homeworld.name}</span>
      </p>
    </li>
  )
}

export default Card