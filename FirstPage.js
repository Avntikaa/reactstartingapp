import ExpenseItem from "./ExpenseItem";
import './FirstPage.css'

const FirstPage=()=>{
    const arr=[{
    item:'snacks',
    price:'10',
    locationofExpense:'Food',
    Date:new Date(2021,2,24)
  },{
    item:'Petrol',
    price:'100',
    locationofExpense:'Travel',
    Date:new Date(2018,12,12)
  },{
    item:'movie',
    price:'200',
    locationofExpense:'Entertainement',
    Date:new Date(2023,8,1)

  }
]
  return <div className='expenses'>
  {
 arr.map((item,index)=>{
         return (
         <ExpenseItem item={item.item} date={item.Date} price={item.price} category={item.locationofExpense}/>)
     })
  }
  </div>
}

export default FirstPage