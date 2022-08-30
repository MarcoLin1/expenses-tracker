import React from "react"
import ExpenseForm from "./ExpenseForm"
import './NewExpense.css'

const NewExpense = (props) => {
  const saveExpenseHandler = (expense) => {
    const saveExpenseData = {
      ...expense,
      id: Math.random().toString()
    }

    props.onAddNewExpense(saveExpenseData)
  }

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpense={saveExpenseHandler} />
    </div>
  )
}

export default NewExpense