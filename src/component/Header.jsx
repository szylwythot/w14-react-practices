import React from 'react'

function Header() {
    // return <div>Header {toHeader}</div>;
    const toHeader = "end of header";
    return React.createElement("div", null, `Header ${toHeader}`);
}

export default Header;