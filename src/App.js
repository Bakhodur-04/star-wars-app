import './App.css';
import React, { useEffect, useState } from 'react'
import Header from './components/Header/Header.jsx';
import Main from './components/Main/Main.jsx';
import HeroesInfo from './API/HeroesInfo'
import { getPagesArray, getPagesCount } from './utils/pages';

function App() {

  const [hero, setHero] = useState([{name: '', height: '', mass: '', homeworld: ''}])
  const [totalCount, setTotalCount] = useState(1)
  const [page, setPage] = useState(1)

  async function fetchInfo() {
    const response = await HeroesInfo.getAll(page);
    console.log(response)
    setHero(response.data.results);
    setTotalCount(getPagesCount(response.data.count))
  }

  useEffect(() => {
    fetchInfo()
  }, [page])
  console.log(totalCount)

  let pageArray = getPagesArray(totalCount);
  console.log(pageArray)
  const changePage = (page) => {
    setPage(page)
  }

  return (
    <div className="App">
      <Header />
      <Main hero={hero} totalCount={totalCount} src={page} pageArray={pageArray} changePage={changePage} page={page}/>
    </div>
  );
}

export default App;
