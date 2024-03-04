import Button from "./Button";
import SingleItem from "./SingleItem";
export default function Item({ data, setBorderColor,borderColor }) {
    function generateRandomColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    }
    function changeBorderColor  ()  {
      const randomColor = generateRandomColor()
      setBorderColor(randomColor)
      }
        return (
            <>
        <Button onClick={changeBorderColor}>Random border color</Button>
        <div className="item">
            {data.map((item,index) => (
             <SingleItem key={index} {...item} borderColor={borderColor} />
            ))}
        </div>
        </>
    );
}
