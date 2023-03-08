import './ExpenseItem.css'
function ExpenseItem(props){
   

    return (
        <div className='expense-item'>
            <div className='expense-item__description'>
            <h2 className>{props.item}</h2>
            <div className='expense-item__price'>{props.price}</div>
                        <h4>{props.LocationofExpenditure}</h4>

            </div>
        </div>

    )
}

export default ExpenseItem