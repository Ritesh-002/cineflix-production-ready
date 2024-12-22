import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import Movies from './pages/movies'
import TvSeries from './pages/tvSeries'
import Navbar from './components/commonComponents/navbar'
import MovieDescription from './pages/movieDescription'
import TvDescription from './pages/tvDescription'

function App() {
  return (
    <>
      <Navbar />
      <br />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/movies' element={<Movies />}></Route>
        <Route path='/tvseries' element={<TvSeries />}></Route>
        <Route path='/movie_description/:id' element={<MovieDescription />}></Route>
        <Route path='/tv_description/:id' element={<TvDescription />}></Route>
      </Routes>
    </>
  )
}

export default App
