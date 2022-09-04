import React, { useState } from "react"
import Card from '../UI/Card'
import ExpensesFilter from "./ExpensesFilter"
import ExpenseChart from "./ExpenseChart"
import ExpenseList from "./ExpenseList"
import './Expenses.css'

function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState('2022')

  const filterHandler = (year) => {
    setSelectedYear(year)
  }

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === selectedYear
  })

  return (
    <Card className="expenses">
      <ExpensesFilter selected={selectedYear} onChangeFilter={filterHandler} />
      <ExpenseChart expenses={filteredExpenses} />
      <ExpenseList items={filteredExpenses} />
    </Card>
  )
}

export default Expenses
