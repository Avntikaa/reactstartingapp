import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import './FirstPage.css'
import ExpensesFilter from './ExpenseFilter';
import ExpenseChart from "./ExpenseChart";

const FirstPage=(props)=>{
    const arr=props.expense;

  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

const filteredExpenses = arr.filter((expense) => {
  const dt = new Date(expense.Date)
// const year=dt.getFullYear();
// const updatedyear=+year;
    return dt.getFullYear().toString() === filteredYear;
  });

  

  return( 
  <div className='expenses'>
        <ExpenseChart expenses={filteredExpenses}/>

         <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
          {/* {
(filteredExpenses.length===0)?<h1>No EXpenses Found</h1>:
(filteredExpenses.length===1)?filteredExpenses.map((item,index)=>{
         return (
          <>
         <ExpenseItem key={Math.random()} item={item.title} date={item.Date} price={item.price} category={item.locationofExpense}/>
     <h2>Add More Expense</h2>
     </>)
    }):  */}
     {filteredExpenses.map((item,index)=>{
         return (
         <ExpenseItem key={Math.random()} item={item.title} date={item.Date} price={item.price} category={item.locationofExpense}/>)
        })
    }
  
      </div>
  )
}

export default FirstPage