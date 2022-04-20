import React, { useState } from 'react';

function ButtonWithHooks() {
    const [key1, setKey1] =  useState("Hook ON");

    
    function handleClick(){
        setKey1(key1 === "Hook ON" ? "Hook OFF" : "Hook ON");
    
    }

    return (
        <div>
            <button onClick={handleClick}>
                {key1}
            </button>
        </div>
    );
}


export default ButtonWithHooks