import React from 'react'
import Header from './Components/Header'
import SideBar from './Components/SideBar'
import Reccomendedvideos from './Components/Reccomendedvideos'
import './App.css'

function App() {
  return (
    <div className='h-full w-full'>
      <Header />
      <div className='flex flex-1 mt-5'>
        <SideBar />
        <Reccomendedvideos/>
      </div>
    </div>
  )
}

export default App