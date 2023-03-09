import ExpenseDate from './ExpenseDate';
import ExpenseDetail from './ExpenseDetail';
import './ExpenseItem.css';
const ExpenseItem=(props)=> {
  // const clickhandle=()=>{console.log('clicked')}
const deleteExpense=(e)=>{
  const i=document.getElementById('maindiv');
i.removeChild(e.target.parentElement);
}
  return (
    <div className='expense-item'>
      <ExpenseDate date={props.date}/>
     <ExpenseDetail title={props.item} price={props.price} category={props.category}/>
     {/* <button onClick={clickhandle}>click me</button> */}
     <button onClick={deleteExpense}>DELETE</button>
    </div>
  );
}

export default ExpenseItem;