import React from "react"
import Card from '../UI/Card'
import ExpenseItem from "./ExpenseItem"
import './Expenses.css'

function Expenses(props) {
  return (
    <Card className="expenses">
      {props.data.map((item) => {
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
