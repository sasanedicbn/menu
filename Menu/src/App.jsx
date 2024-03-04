import menu from "./data/data"
import Button from "./Button"
import Item from "./Item"
import '../src/App.css'
import { useState } from "react"
function App() {
const [borderColor, setBorderColor] = useState('blue')

  return (
    <div className="container">
    <Button >Add to cart</Button>
    <section>
      <ul>
        <Item data={menu} setBorderColor={setBorderColor} borderColor={borderColor} />
      </ul>
    </section>
    </div>
    
  )
}

export default App
