import React, { useState } from "react"
import ExpenseForm from "./ExpenseForm"
import './NewExpense.css'

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false)
  const saveExpenseHandler = (expense) => {
    const saveExpenseData = {
      ...expense,
      id: Math.random().toString()
    }

    props.onAddNewExpense(saveExpenseData)
    setIsEditing(false)
  }

  const startEditing = () => {
    setIsEditing(true)
  }

  const stopEditing = () => {
    setIsEditing(false)
  }

  let DisplayExpense = (
    <button type="button" onClick={startEditing}>
      Add New Expense
    </button>
  )

  if (isEditing) {
    DisplayExpense = (
      <ExpenseForm
        onSaveExpense={saveExpenseHandler}
        onCancelEditing={stopEditing}
      />
    )
  }

  return <div className="new-expense">{DisplayExpense}</div>
}

export default NewExpense