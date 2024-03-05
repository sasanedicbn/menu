import menu from "./data/data"
import Button from "./Button"
import Item from "./Item"
import MasniSir from "./MasniSir"
import '../src/App.css'
import { useState } from "react"
function App() {
const [borderColor, setBorderColor] = useState('blue')
const [isActive, setisActive] = useState('green')
console.log(isActive)
function changeBtns(){
if(isActive === 'green'){
 setisActive('red')
} else{
  setisActive('green')
}
}
setTimeout(changeBtns, 2000);


  return (
    <div className="container">
    <Button >Add to cart</Button>
    <section>
      <ul>
        <Item data={menu} setBorderColor={setBorderColor} borderColor={borderColor} />
      </ul>
    </section>
    <section>
      <MasniSir isActive={isActive}/>
    </section>
    </div>
    
  )
}

export default App
