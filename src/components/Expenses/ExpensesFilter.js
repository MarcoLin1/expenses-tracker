import React from "react";
import './ExpensesFilter.css'

const ExpenseFilter = (props) => {
  const options = [
    {
      label: "2022",
      value: 2022,
    },
    {
      label: "2021",
      value: 2021,
    },
    {
      label: "2020",
      value: 2020,
    },
    {
      label: "2019",
      value: 2019,
    },
    {
      label: "2018",
      value: 2018,
    },
  ]

  const selectedYearHandler = (event) => {
    props.onChangeFilter(event.target.value)
  }

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={selectedYearHandler}>
          {options.map((item) => (
            <option value={item.value} key={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default ExpenseFilter