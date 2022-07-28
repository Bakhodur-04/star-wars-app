import React from 'react'
import Card from '../Card/Card'
import styles from './Main.module.css'

const Main = ({hero}) => {

  return (
    <main className={styles.main}>
      <section className="section-hero">
          <div className="section-hero__container container">
              <h1 className="section-hero__main-title">Звездные войны! Выбери своего любимого героя!</h1>
          </div>
      </section>
      
      <section className="section-content">
          <div className="section-content__container container">
              <ul className={styles.contentCard}>
                {hero.map((elem, i) => <Card name={elem.name} height={elem.height} mass={elem.mass} sil={i} id={i}/>)}
              </ul>
          </div>
      </section>
    </main>
  )
}

export default Main