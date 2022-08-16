
import React from 'react'
import techtik from './asset/techtik.jpeg'
import './App.css'


function App () {
  return (
    <div className='header_menu'>
      <div className='flex'>
      <img src={techtik} alt="logo"/>
      <button className='btn'> Contact us</button>
      </div>
   </div>
  )
  
}
export default App;

