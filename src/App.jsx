import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './component/Navbar'
import Trending from './component/Trending'
import Recomended from './component/Recomended'
import './App.css'
import SavedMovies from './SavedMovies'

function App() {
  return (
      <div className='container'>
        <Trending />
        <div className="container flex gap-8 mx-auto w-[1280px]">
          <Navbar />
          <Routes>
            <Route path='/SavedMovies' element={<SavedMovies />} />
          </Routes>
          <Recomended />
        </div>
      </div>
  )
}

export default App
