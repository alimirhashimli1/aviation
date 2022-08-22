import logo from './logo.svg';
import {useEffect, useState} from "react";
import './App.css';
import axios from "axios";
import { data } from './data';

function App() {
  const [aviationId, setAviationId ] = useState([])
  const [checkedInput, setCheckedInput] = useState(false)
  
  useEffect(()=>{
    for(let i = 0; i < data.data.airlines.length; i++){
      setAviationId(aviationId+1)
    }
  
  }, [])

  const handleChange = (event, index) =>{
    if(aviationId[index] === index){
      
      setCheckedInput(true)
      return event.target.checked
    } else {
     setCheckedInput(false )
    return !event.target.checked
   }
  }

  

  const settings = {
    method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer wxq3fba4l0bppt0gx4oq5nyexconk03",
        "Accept": "application/vnd.aviation.v1+json"
      
    },
    credentials: "include"

  }

  
   
    
  



useEffect(()=>{
    axios.get("https://aviation.technoly.com/api/airline")
    .then(res => {
      console.log(res.data)
    })
    .catch(err => {
      console.log(err)
    }
    )
  }, [])



  return (
    <div className="App">
      <table>
      <thead>
            <tr>
              <th>Airline Name</th>
              <th>Airline Callsign</th>
              <th>Checked</th>
            </tr>
        </thead>
        <tbody >
      {
        Object.keys(data.data.airlines).map((airline,index) => (
           <tr className={checkedInput ? "airline-row": ""} key={index}>
            <td>
           <h2>{data.data.airlines[airline].name}</h2>
           </td>
           <td >
          <h3>{data.data.airlines[airline].callsign}</h3>
          </td>
          <td >
          <input  id={index} type="checkbox"  name={data.data.airlines[airline].name} onChange={(event)=> {
            handleChange(event, aviationId[index])            
          }} />
          </td>
          </tr>
          
         ))
        }
        </tbody>
        </table>
    </div>
    );
}

export default App;
