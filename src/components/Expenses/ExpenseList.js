import React from "react";
import ExpenseItem from "./ExpenseItem"
import './ExpenseList.css'

const ExpenseList = (props) => {
  if (props.items.length === 0) {
    return <h3 className="expenses-list__fallback">No Expense Data</h3>
  }

  return (
    <div className="expenses-list">
      {props.items.map((item) => {
        return (
          <ExpenseItem
            key={item.id}
            date={item.date}
            title={item.title}
            amount={item.amount}
          />
        )
      })}
    </div>
  )
}

export default ExpenseList