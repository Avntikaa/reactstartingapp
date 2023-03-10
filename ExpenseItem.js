import ExpenseDate from './ExpenseDate';
import ExpenseDetail from './ExpenseDetail';
import './ExpenseItem.css';
import { useState } from 'react';

const ExpenseItem=(props)=> {
  const [prices,setPrices]=useState(props.price);

const updatePrice=()=>{
setPrices('100');
}
const deleteExpense=(e)=>{
  const i=document.getElementById('maindiv');
i.removeChild(e.target.parentElement);
}
  return (
    <div className='expense-item'>
      <ExpenseDate date={props.date}/>
     <ExpenseDetail title={props.item} price={props.price} category={props.category}/>
     <button onClick={deleteExpense}>DELETE</button>
     <button onClick={updatePrice}>UPDATE</button>
    </div>
  );
}

export default ExpenseItem;