import React from 'react'


function Header({to}) {
    // return <div>Header {toHeader}</div>;
    // const toHeader = "end of header";
    return React.createElement("div", null, `Header ${to}`);
}

export default Header;