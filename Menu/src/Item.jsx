
export default function Item({ data }) {
    return (
        <div>
            {data.map((item) => (
                <li key={item.id}>
                    <div>
                        <p>{item.id}</p>
                        <p>Title: {item.title}</p>
                        <p>Category: {item.category}</p>
                        <p>Price: {item.price}</p>
                        <p>Description: {item.desc}</p>
                    </div>
                </li>
            ))}
        </div>
    );
}
