import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css' 
import Card from './components/Card'



function App() { 
    
  const props1={
    name:"Joey",
    age:21,
    gender:"Female"
  }

  const props2={
    name:"alexa",
    age:21,
    gender:"Female"
  }
  
  return (
    <>  
      <Card name="Ayush"/>
      <Card/>
    </>
  )
}

export default App
