import React from 'react'

// export const Header = () => {
//   return (
//     <div>Header</div>
//   )
// }

const Header = () => {
  const myStyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    border: "1px solid black",
    paddingtop: "50px",
    paddingright: "30px",
    paddingbottom: "50px",
    paddingleft: "80px",
    fontFamily: "Sans-Serif",
  };
  return (
    <>
      <h1 style={myStyle}>YYCWhatsNearMe?</h1>
    </>
  );
}

export default Header;


