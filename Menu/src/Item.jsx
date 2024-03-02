
export default function Item({ data }) {
    return (
        <div className="item">
            {data.map((item) => (
                <li key={item.id}>
                    <div className="item-information">
                        <p><span>Title:</span> {item.title}</p>
                        <p><span>Category:</span> {item.category}</p>
                        <p><span>Price:</span> {item.price}</p>
                        <p><span>Description:</span> {item.desc}</p>
                    </div>
                </li>
            ))}
        </div>
    );
}
