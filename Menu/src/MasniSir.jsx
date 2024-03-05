function MasniSir ({isActive}) {
return(
    <>
    <button className="btn" style={{ backgroundColor: ` ${isActive === 'green' ? 'green' : 'red'}` }}>BTN 1</button>
    <button className="btn" style={{ backgroundColor: ` ${isActive === 'green' ? 'red' : 'green'}` }}> BTN 2</button>
    </>
)
}
export default MasniSir;