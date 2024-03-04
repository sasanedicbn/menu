const SingleItem = (item) => {
    console.log(item)
    return(
        <li key={item.id} style={{ border: `2px solid ${item.borderColor}`}} >
        <div className="item-information">
            <p className="title"> {item.title}</p>
            <p><span>Category:</span> {item.category}</p>
            <p><span>Price:</span> {item.price}</p>
            <p><span>Description:</span> {item.desc}</p>
        </div>
    </li>
    )
}
export default SingleItem;