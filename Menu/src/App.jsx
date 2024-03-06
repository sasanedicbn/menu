import menu from "./data/data"
import Button from "./Button"
import Item from "./Item"
import MasniSir1 from "./MasniSir1"
import '../src/App.css'
import { useState } from "react"
function App() {
const [borderColor, setBorderColor] = useState('blue')
const [isActive, setisActive] = useState(true);
// const [isLoading, setIsLoading] = useState(true);
console.log(isActive)
// console.log(isLoading)
const changeBtns = () => {
  setisActive( !isActive);
  // setisActive(!isLoading);
};
setTimeout(changeBtns, 4000);


  return (
    <div className="container">
    <Button >Add to cart</Button>
    <section>
      <ul>
        <Item data={menu} setBorderColor={setBorderColor} borderColor={borderColor} />
      </ul>
    </section>
    <section>
      <MasniSir1   isActive={isActive} />
      <MasniSir1   isActive={!isActive} />
    </section>
    </div>
    
  )
}

export default App
