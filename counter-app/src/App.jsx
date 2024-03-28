import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {   
  
    
    const [count,setCount]=useState(0);
    
    function Add(){ 
       setCount(count+1); 
    } 
    function decrease(){ 
      setCount(count-1); 
    } 

    // let count = 0;

    // function Add() {
    //     count = count + 1;
    //     document.getElementById('h1').innerHTML = "Counter is " + count;
    //     document.getElementById('btn1').innerHTML="Add value "+ count;
    //     document.getElementById('btn2').innerHTML="decrease value "+ count;
    // }

    // function decrease() {
    //     count = count - 1;
    //     document.getElementById('h1').innerHTML = "Counter is " + count;
    //     document.getElementById('btn1').innerHTML="Add value "+ count;
    //     document.getElementById('btn2').innerHTML="decrease value "+ count;
    // }


  
  return (
    <>
      <h1 id='h1'>Counter is {count}</h1>
      <button id='btn1' onClick={Add}>Add value {count}</button>
      <button id='btn2' onClick={decrease}>decrease value {count}</button>
    </>
  )
}

export default App
