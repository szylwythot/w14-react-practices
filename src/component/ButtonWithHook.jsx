import React, { useState, useEffect } from 'react';

function ButtonWithHooks() {
    const [key1, setKey1] =  useState("Hook ON");
    const [key2, setKey2] = useState(0);
    const [countries, setCountries] = useState([]);

    useEffect(
        () => {
            fetch('https://restcountries.com/v3.1/all')
            .then( res => res.json())
            .then(countriesData => setCountries(countriesData));
            console.log("render");
        },
        []
    );

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
            <div className='countries'>
                {countries.map((country, index) =>  
                                <div key={index}>
                                    {country.name.common}
                                </div>
                )} 
            </div>
        </div>
    );
}


export default ButtonWithHooks