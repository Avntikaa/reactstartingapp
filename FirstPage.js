import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import './FirstPage.css'
import ExpensesFilter from './ExpenseFilter';

const FirstPage=(props)=>{
    const arr=props.expense;

  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

const filteredExpenses = arr.filter((expense) => {
  const dt = new Date(expense.Date)

    return dt.getFullYear().toString() === filteredYear;
  });


  return( 
  <div className='expenses'>
          <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>

 {
filteredExpenses.map((item,index)=>{
         return (
         <ExpenseItem key={index} item={item.title} date={item.Date} price={item.price} category={item.locationofExpense}/>)
     })
  }
      </div>
  )
}

export default FirstPage