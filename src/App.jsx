import React from 'react'
import Header from './Components/Header'
import SideBar from './Components/SideBar'
import Reccomendedvideos from './Components/Reccomendedvideos'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import SearchResult from './Components/SearchResult'

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>

          <Route
            path='/'
            element={<div className='flex flex-1 mt-5'>
              <SideBar />
              <Reccomendedvideos />
            </div>} />

          <Route path='/search/:searchterm' element={
            <div className='flex flex-1 mt-5'>
            <SideBar />
            <SearchResult/>
          </div>
          } />

        </Routes>


      </Router></div>

  )
}

export default App