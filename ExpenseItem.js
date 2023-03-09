import ExpenseDate from './ExpenseDate';
import ExpenseDetail from './ExpenseDetail';
import './ExpenseItem.css';
import { useState } from 'react';

const ExpenseItem=(props)=> {
  const [price,setPrice]=useState(props.price);

const updatePrice=()=>{
setPrice('100');
}
const deleteExpense=(e)=>{
  const i=document.getElementById('maindiv');
i.removeChild(e.target.parentElement);
}
  return (
    <div className='expense-item'>
      <ExpenseDate date={props.date}/>
     <ExpenseDetail title={props.item} price={price} category={props.category}/>
     <button onClick={deleteExpense}>DELETE</button>
     <button onClick={updatePrice}>UPDATE</button>
    </div>
  );
}

export default ExpenseItem;