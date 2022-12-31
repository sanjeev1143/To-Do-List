import React, { useState } from 'react'
import Listt from './listt';
import './App.css'
import Button from '@mui/material/Button';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
function App() {
  const [cur, set] = useState("");
  const [arr, setarr] = useState([]);
  function changeit(event) {

    set(event.target.value);
  }
  function updt() {
    console.log(arr);
    setarr((old) => { return [...old, cur] })
    set("");
  }
  function dlt(key) {

    setarr((old) => {
      return old.filter((item, index) => {
        return index !== key
      })
    });
  }
  return (
    <div className='main_div'>
      <div className='center_div'>
        <br />
        <h1>ToDo List</h1>
        <br />
        <input type="text" onChange={changeit} value={cur} />
        <Button size="large" color="success" onClick={updt} ><NoteAddIcon /></Button>
        <ol>
          {arr.map((val, index) => <Listt key={index} Text={val} arr={arr} onSelect={dlt} id={index} />)}
        </ol>
      </div>
    </div>
  )
}

export default App
