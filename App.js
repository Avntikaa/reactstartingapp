import './App.css';
import React, { useState } from 'react'

import ExpenseForm from './components/ExpenseForm';
import FirstPage from './components/FirstPage';
const App=()=>{
      const[expensearr,setExpensearr]=useState([]);

  const getuserdata=(ele)=>{
   
    setExpensearr((prevexpense)=>{
      return [ele,...prevexpense];
    });
  }
  return (
    <div>
      <ExpenseForm getdata={getuserdata}/>
          <FirstPage expense={expensearr}/>

    </div>
    
  )
  }
export default App;
