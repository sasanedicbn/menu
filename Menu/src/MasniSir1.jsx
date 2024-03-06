
function MasniSir1({ isActive }) {
  
    return (
      <>
        <button className={`btn ${isActive ? "disabled" : "active"}`} disabled={isActive} >BTN 1</button>
      </>
    );
  }
  export default MasniSir1;