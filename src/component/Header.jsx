import React from 'react'


function Header(props) {
    // return <div>Header {toHeader}</div>;
    // const toHeader = "end of header";
    return React.createElement("div", null, `Header ${props.to}`);
}

export default Header;