import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import './FirstPage.css'

const FirstPage=(props)=>{
  const arr=props.expense;
  return( 
  <div className='expenses'>
 {
 arr.map((item,index)=>{
  console.log(item);
         return (
         <ExpenseItem item={item.title} date={item.Date} price={item.price} category={item.locationofExpense}/>)
     })
  }
      </div>
  )
}

export default FirstPage