import React from 'react'
import styles from './Header.module.css'
import logo from './../../img/logo.png'

const Header = () => {
  return (
    <header className="App-header header">
      <div className="header__container container">
        <a href='/' className='header__logo'>
          <img className='logo-img' src={logo} alt='logo star wars'/>
        </a>
        
        <nav className="header__nav">
          <ul className={styles.header__list}>
            <li className="header__item">
              <a href='/'>Главная</a>
            </li>
            <li className="header__item">
              <a href='/'>Любимые герои</a>
            </li>
            <li className="header__item">
              <a href='/'>Поиск</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header