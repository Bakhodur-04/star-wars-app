import React from 'react'
import Card from '../Card/Card'
import Pagination from '../Pagination'
import styles from './Main.module.css'

const Main = ({hero, totalCount, src, pageArray, changePage, page}) => {

  return (
    <main className={styles.main}>
      <section className="section-hero">
          <div className="section-hero__container container">
              <h1 className="section-hero__main-title">Звездные войны! Выбери своего любимого героя!</h1>
          </div>
      </section>
      
      <section className="section-content">
          <div className="section-content__container container">
              {totalCount < 2 
              ? <h2 className="section-content__loader-title">Загрузка</h2> 
              :
              <div>
                <ul className="section-content__list-pagination section-content__list-pagination_upper">
                {pageArray.map(elem => 
                  <Pagination key={elem} changePage={changePage} elem={elem} page={page}/>
                )}
                </ul>

                <ul className={styles.contentCard}>
                  {hero.map((elem, i) => <Card key={i} name={elem.name} height={elem.height} mass={elem.mass} homeworld={elem.homeworld} id={i} src={src}/>)}
                </ul>

                <ul className="section-content__list-pagination">
                {pageArray.map(elem => 
                  <Pagination key={elem} changePage={changePage} elem={elem} page={page}/>
                )}
                </ul>
              </div>
              }
          </div>
      </section>
    </main>
  )
}

export default Main