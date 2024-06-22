import React, { useState } from 'react'
import Header from './Components/Header'
import SideBar from './Components/SideBar'
import Reccomendedvideos from './Components/Reccomendedvideos'
import { BrowserRouter as Router, Routes, Route,Navigate} from 'react-router-dom'
import './App.css'
import SearchResult from './Components/SearchResult'
import Loginscrn from './Components/Loginscrn'

function App() {
  const [Sidebarvisibility,setsidebarvisibility]=useState(true)
  const [headervisibility,setheadervisibility]=useState(true)
 
  return (
    <div className='m-0 p-0'>
      <Router>
      {headervisibility && <Header Sidebarvisibility={Sidebarvisibility} setsidebarvisibility={setsidebarvisibility}/>}
        <Routes>

          <Route
            path='/'
            element={<div className='flex flex-1 mt-5'>
              
              {Sidebarvisibility && <SideBar />}
              <Reccomendedvideos />
            </div>} />

          <Route path='/search/:searchterm' element={
            <div className='flex flex-1 mt-5'>
              
            {Sidebarvisibility && <SideBar />}
            <SearchResult/>
          </div>
          } />
        <Route
        path='/auth'
        element={<Loginscrn setheadervisibility={setheadervisibility} />}
        />
        <Route path='*' element={<Navigate to='/' />}/>
          
        </Routes>


      </Router></div>

  )
}

export default App