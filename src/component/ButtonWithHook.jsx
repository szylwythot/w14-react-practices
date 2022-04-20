import React, { useState } from 'react';

function ButtonWithHooks() {
    const [key1, setKey1] =  useState("This is the default state of a function component.")
  return (
    <div>
        <button onclick="activateLasers()">
            {key1}
        </button>
    </div>
  );
}

function setKey1(){

}

export default ButtonWithHooks