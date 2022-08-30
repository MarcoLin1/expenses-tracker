import React, { useState } from "react"
import Card from '../UI/Card'
import ExpenseItem from "./ExpenseItem"
import ExpensesFilter from "./ExpensesFilter"
import './Expenses.css'

function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState('2018')

  const filterHandler = (year) => {
    setSelectedYear(year)
  }

  return (
    <Card className="expenses">
      <ExpensesFilter selected={selectedYear} onChangeFilter={filterHandler} />
      {props.mockData.map((item) => {
        return (
          <ExpenseItem
            key={item.id}
            date={item.date}
            title={item.title}
            amount={item.amount}
          />
        )
      })}
    </Card>
  )
}

export default Expenses
