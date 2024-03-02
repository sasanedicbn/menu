import menu from "./data/data"
import Button from "./Button"
import Item from "./Item"

function App() {
console.log(menu)
  return (
    <div className="container">
    <Button>Add to cart</Button>
    <section>
      <ul>
        <Item data={menu}/>
      </ul>
    </section>
    </div>
    
  )
}

export default App
