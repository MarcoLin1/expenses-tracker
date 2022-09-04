import React, { useState } from 'react'
import Expenses from "./components/Expenses/Expenses"
import NewExpense from "./components/NewExpense/NewExpense"

  const mockData = [
    {
      id: 1,
      date: new Date(),
      title: "Rent Cart",
      amount: 153.15,
    },
    {
      id: 2,
      date: new Date(2021, 8, 9),
      title: "Buy Drink",
      amount: 13.85,
    },
    {
      id: 3,
      date: new Date(2020, 9, 10),
      title: "Food",
      amount: 113.11,
    },
  ]

function App() {
  const [expenses, setExpenses] = useState(mockData)

  const addNewExpenseHandler = (newExpense) => {
    setExpenses((preExpenses) => {
      return [newExpense, ...preExpenses]
    })
  }

  return (
    <div className="App">
      <NewExpense onAddNewExpense={addNewExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  )
}

export default App
