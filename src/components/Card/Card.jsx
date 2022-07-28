import React from 'react';
import styles from './Card.module.css'


const Card = ({name, height, mass, sil, id}) => {

  return (
    <li id={id+1} className={styles.card}>
      <img className={styles.cardImg} src={`https://starwars-visualguide.com/assets/img/characters/${sil+1}.jpg`} alt={""}/>
      <p className={styles.info}>
        <span className={styles.cardName}>{name}</span>
        <span className={styles.cardName}>Рост: {height} см</span>
        <span className={styles.cardName}>Масса: {mass} кг</span>
      </p>
    </li>
  )
}

export default Card