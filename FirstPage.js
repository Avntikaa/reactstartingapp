import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import './FirstPage.css'
import ExpensesFilter from './ExpenseFilter';

const FirstPage=(props)=>{
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const arr=props.expense;

  return( 
  <div className='expenses'>
          <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>

 {
 arr.map((item,index)=>{
         return (
         <ExpenseItem item={item.title} date={item.Date} price={item.price} category={item.locationofExpense}/>)
     })
  }
      </div>
  )
}

export default FirstPage