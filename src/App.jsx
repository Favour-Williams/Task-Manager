import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Board from './components/Board/Board'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  

  return (
    <>
      <div>
        {/**Header */}
        <div className='topBar' 
          style={{
            height:"10%",
            position:"absolute",
            top:0,
            left:0,
            right:0,
            backgroundColor:"blue",
            zIndex:20
          }}>
            <Board/>
        </div>


        {/**Body */}
        <div className="mainBody"></div>


        {/**NavBar */}
        <div className="narbav" 
          style={{
            backgroundColor:"purple", 
            position:"absolute",
            width:"14%",
            top:0,
            bottom:0,
          
          }}>

          </div>
        
      </div>
    </>
  )
}

export default App
