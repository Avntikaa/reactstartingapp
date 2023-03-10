import './ExpenseDate.css'
const ExpenseDate=(props)=>{
  const dt = new Date(props.date)

const month = dt.toLocaleString('en-US', { month: 'long' });
  const day = dt.toLocaleString('en-US', { day: '2-digit' });
  const year =dt.getFullYear();
  return (
    <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </div>
  )
}
export default ExpenseDate