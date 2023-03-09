import ExpenseDate from './ExpenseDate';
import ExpenseDetail from './ExpenseDetail';
import './ExpenseItem.css';
const ExpenseItem=(props)=> {
  

  return (
    <div className='expense-item'>
      <ExpenseDate date={props.date}/>
     <ExpenseDetail title={props.item} price={props.price} category={props.category}/>
    </div>
  );
}

export default ExpenseItem;