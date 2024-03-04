import Button from "./Button";
import SingleItem from "./SingleItem";
export default function Item({ data,  }) {

        return (
            <>
        <Button >Random border color</Button>
        <div className="item">
            {data.map((item,index) => (
             <SingleItem key={index} {...item}/>
            ))}
        </div>
        </>
    );
}
