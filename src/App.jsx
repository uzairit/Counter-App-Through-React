import { useState } from 'react'
import './App.css'

function App() {

  let [counter, counterState] = useState(0)

  const addValue = () => {
    if (counter !== 20) {
      counterState(counter + 1)
    }
  }

  const removeValue = () => {
    if (counter !== 0) {
      counterState(counter - 1)
    }
  }

  return (
    <>
      <h1>Counter value: {counter} </h1>
      <div className="button-row">
        <button className="add-btn" onClick={addValue} disabled={counter === 20}>Add value</button>
        <button className="remove-btn" onClick={removeValue} disabled={counter === 0}>Remove value</button>
      </div>
    </>
  )
}

export default App
