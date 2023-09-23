import React from 'react'
import './App.css'
import {
  originals, trending, ComedyMovies,
  ActionMovies, RomanceMovies, Documentaries,
  HorrorMovies

} from './urls';
import NavBar from './components/navbar/navBar';
import Banner from './components/banner/banner';
import RowPost from './components/rowPost/RowPost';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost title='Netflix Origins' url={originals} />
      <RowPost title='Trending' isSmall url={trending} />
      <RowPost title='Action' isSmall url={ActionMovies} />
      <RowPost title='Comedy' isSmall url={ComedyMovies} />
      <RowPost title='Romance' isSmall url={RomanceMovies} />
      <RowPost title='Horror' isSmall url={HorrorMovies} />
      <RowPost title='Documentaries' isSmall url={Documentaries} />


    </div>
  );
}

export default App;
