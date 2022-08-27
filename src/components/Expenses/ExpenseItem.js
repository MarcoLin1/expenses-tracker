import React from "react"
import Card from '../UI/Card'
import ExpenseDate from "./ExpenseDate"
import ExpenseDescription from "./ExpenseDescription"
import "./ExpenseItem.css"

function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDescription title={props.title} amount={props.amount} />
    </Card>
  )
}

export default ExpenseItem
