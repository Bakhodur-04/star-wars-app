import './App.css';
import React, { useEffect, useState } from 'react'
import Header from './components/Header/Header.jsx';
import Main from './components/Main/Main.jsx';
import NamesHeroes from './API/NamesHeroes'

function App() {

  const [hero, setHero] = useState([{name: '', height: '', mass: ''}])

  async function fetchNames() {
    const response = await NamesHeroes.getAllName();
    setHero(response.data.results);
  }

  useEffect(() => {
    fetchNames()
  }, [])

  return (
    <div className="App">
      <Header />
      <Main hero={hero}/>
    </div>
  );
}

export default App;
