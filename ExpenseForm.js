import React from 'react'
import './ExpenseForm.css'
const ExpenseForm = () => {
    const addtitle=(e)=>{
        console.log(e.target.value);
    }
    const addPrice=(e)=>{
        console.log(e.target.value);
    }
    const addDate=(e)=>{
        console.log(e.target.value);
    }
  return (
<div className="form-style-6">
<h1>Add Expense</h1>
<form>
<input type="text"  onChange={addtitle} placeholder="Enter item" />
<input type="number" onChange={addPrice} placeholder="Enter Price" />
<input type="date"  onChange={addDate} placeholder="Enter Date" />

<button type="submit" value="Send" />
</form>
</div>
  )
  }

export default ExpenseForm