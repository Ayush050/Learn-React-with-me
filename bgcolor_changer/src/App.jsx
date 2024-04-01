import { useState } from "react";


function App() { 
  const [color,setColor]=useState('olive'); 
  function red(){
      setColor("red");
  }

  function green(){
    setColor("green");
 }

  return (
    <div className="flex flex-col items-center justify-center h-screen" style={{backgroundColor:color}}>
    
    <div className="fixed flex flex-wrap justify-center space-x-2">
        <button  
        onClick={red}
        className="gap-3 px-3 py-2 rounded" style={{backgroundColor:"red"}}>red</button>
        <button 
         onClick={green}
          className="gap-3 px-3 py-2 rounded" style={{backgroundColor:"green"}}>green</button>
        <button 
         onClick={()=>setColor("blue")}
         className="gap-3 px-3 py-2 rounded" style={{backgroundColor:"blue"}}>blue</button>
    </div>
    </div>
  );
}

export default App
