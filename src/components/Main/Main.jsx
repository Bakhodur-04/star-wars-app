import React, { useEffect, useState } from 'react'
import NamesHeroes from '../../API/NamesHeroes'
import Card from '../Card/Card'
import styles from './Main.module.css'

const Main = () => {

  const [hero, setHero] = useState([{name: '', height: '', mass: ''}])

  async function fetchNames() {
    const response = await NamesHeroes.getAllName();
    setHero(response.results);
  }

  useEffect(() => {
    fetchNames()
  }, [])

  console.log(hero)

  return (
    <main className={styles.main}>
      <section className="section-hero">
          <div className="section-hero__container container">
              <h1 className="section-hero__main-title">Star Wars</h1>
          </div>
      </section>
      
      <section className="section-content">
          <div className="section-content__container container">
              <div className={styles.contentCard}>
                {hero.map((elem, i) => <Card name={elem.name} height={elem.height} mass={elem.mass} sil={i}/>)}
              </div>
          </div>
      </section>
    </main>
  )
}

export default Main