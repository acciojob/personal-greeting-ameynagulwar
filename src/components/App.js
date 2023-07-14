
import React,{useState}from "react";
import './../styles/App.css';

const App = () => {
  let [name,setName] = useState("")

  function displayName(event){
    setName(name = event.target.value)
  }
  return (
    <div>
        <input type="text" placeholder="Enter name" value={name} onChange={displayName}/>
        <h1>Hello {name}!</h1>
    </div>
  )
}

export default App
