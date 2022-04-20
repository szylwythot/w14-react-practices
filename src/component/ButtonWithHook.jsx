import React, { useState } from 'react';

function ButtonWithHooks() {
    const [key1, setKey1] =  useState("Hook ON");
    const [key2, setKey2] = useState(0);

    
    function handleClickButton1(){
        setKey1(key1 === "Hook ON" ? "Hook OFF" : "Hook ON");
    }

    function handleClickButton2(){
        setKey2(1);
    }

    return (
        <div>
            <button onClick={handleClickButton1}>
                {key1}
            </button>
            <button onClick={handleClickButton2}>
                {key2}
            </button>
        </div>
    );
}


export default ButtonWithHooks