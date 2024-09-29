import './App.css';
import { useState } from 'react';
import Card from '../src/components/Card'

function App() {

    // const [count , setCount] = useState(0)

    const [name , setName] = useState("")
    console.log("name" ,name)


    // const name = "Sufiyan"

    // const incre = ()=>{
    //   setCount(count + 1)
    // }
    // const dec = ()=>{
    //   setCount(count - 1)
    // }
  return (
    <div className="App">
      
      {/* <h1>{count}</h1>
     
      <button onClick={incre}>Inc</button>
      <button onClick={dec}>Dec</button> */}

        <input type='text' placeholder='name here' onChange={(e)=>{
          setName(e.target.value)
        }} />

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />



      <Card name={name} />

      
    </div>
  );
}

export default App;
