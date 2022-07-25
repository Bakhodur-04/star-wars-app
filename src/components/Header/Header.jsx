import React from 'react'
import styles from './Header.module.css'

const Header = props => {
  return (
    <header className="App-header header">
      <div className="header__container container">
        <nav className="header__nav">
          <ul className={styles.header__list}>
            <li className="header__item">
              <a href='/'>Главная</a>
            </li>
            <li className="header__item">
              <a href='/'>Любимые персонажи</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header