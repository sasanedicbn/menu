import SingleItem from "./SingleItem";
export default function Item({ data }) {
    return (
        <div className="item">
            {data.map((item) => (
           <SingleItem {...item}/>
            ))}
        </div>
    );
}
