import './App.css';
import React, { useState } from 'react'

import ExpenseForm from './components/ExpenseForm';
import FirstPage from './components/FirstPage';
const App=()=>{
      const[expensearr,setExpensearr]=useState([]);
      const[openform,setOpenform]=useState(false);
      const[openbtn,setOpenbtn]=useState(true);

  const getuserdata=(ele)=>{
    setExpensearr((prevexpense)=>{
      return [ele,...prevexpense];
    });
    setOpenform((prev)=>!prev);
    setOpenbtn((prev)=>!prev);
  }

  const openFormDiv=()=>{
    setOpenform((prev)=>!prev);
    setOpenbtn((prev)=>!prev);
  }

  
  return (
    <div>
    {openform &&
      <ExpenseForm getdata={getuserdata} open={openform}/>}
      {openbtn &&
      <button id="btn1" onClick={openFormDiv}>ADD EXPENSE</button>}
          <FirstPage expense={expensearr}/>
<input type='text' id='input1'/>

    </div>
    
  
  )
  }
export default App;
