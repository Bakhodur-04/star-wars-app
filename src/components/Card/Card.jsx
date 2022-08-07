import React from 'react';
import styles from './Card.module.css'
import { ReactComponent as Heart } from './../../img/heart.svg';

const Card = ({name, height, mass, homeworld, id, src}) => {

  return (
    <li id={id} className={styles.card}>
      <img className={styles.cardImg} 
        src={
          ((id+1)+((src-1)*10)) < 17
            ? `https://starwars-visualguide.com/assets/img/characters/${(id+1)+((src-1)*10)}.jpg`
            : `https://starwars-visualguide.com/assets/img/characters/${(id+1)+((src-1)*10)+1}.jpg`
        } 
        alt={name}/>
      <div className={styles.infoHeart}>
        <p className={styles.info}>
          <span className={styles.cardName}>{name}</span>
          <span className={styles.cardName}>Рост: {height} см</span>
          <span className={styles.cardName}>Масса: {mass} кг</span>
          {/* <span className={styles.cardName}>Планета: {homeworld.name}</span> */}
        </p>

        <a href='/' className={styles.link}>
          <Heart className={styles.heart}></Heart>
        </a>
      </div>
      
    </li>
  )
}

export default Card