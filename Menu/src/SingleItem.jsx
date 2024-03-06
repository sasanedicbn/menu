import { useState } from "react";

const SingleItem = (item) => {
    const[count,setCount] = useState(0)
 
    return(
        <li key={item.id} style={{ border: `2px solid ${item.borderColor}`}} >
        <div className="item-information">
            <p className="title"> {item.title}</p>
            <p><span>Category:</span> {item.category}</p>
            <p><span>Price:</span> {item.price}</p>
            <p><span>Description:</span> {item.desc}</p>
            <button onClick={() => setCount(count+1)}>Increment</button>
            <p>{count}</p>
        </div>
    </li>
    )
}
export default SingleItem;