import Expenses from "./components/Expenses/Expenses"

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

  return (
    <div className="App">
      <Expenses data={mockData}/>
    </div>
  )
}

export default App
