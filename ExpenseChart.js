import React from 'react'
import Chart from './chart/Chart'
const ExpenseChart = (props) => {
    const chartdatapoints=[
        {label:'jan',value:0},
          {label:'feb',value:0},
            {label:'mar',value:0},
{label:'april',value:0},
{label:'may',value:0},
{label:'june',value:0},
{label:'july',value:0},
{label:'aug',value:0},
{label:'sep',value:0},
{label:'oct',value:0},
{label:'nov',value:0},
{label:'dec',value:0},
];
props.expenses.forEach(e=> {
    const dt = new Date(e.Date)

  const expenseMonth=dt.getMonth();
chartdatapoints[expenseMonth].value+=e.price;
});


  return (
    <Chart datapoints={chartdatapoints}/>
  )
}

export default ExpenseChart