import Expenses from "./components/Expenses/Expenses"
import NewExpense from "./components/NewExpense/NewExpense"

function App() {
  const mockData = [
    {
      id: 1,
      date: new Date(),
      title: "Rent Cart",
      amount: 153.15,
    },
    {
      id: 2,
      date: new Date(),
      title: "Buy Drink",
      amount: 13.85,
    },
    {
      id: 3,
      date: new Date(),
      title: "Food",
      amount: 113.11,
    },
  ]

  const addNewExpenseHandler = (newExpense) => {
    console.log(newExpense)
  }

  return (
    <div className="App">
      <NewExpense onAddNewExpense={addNewExpenseHandler} />
      <Expenses mockData={mockData} />
    </div>
  )
}

export default App
