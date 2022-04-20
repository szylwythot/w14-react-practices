import React, { Component } from 'react'

class ButtonWithClass extends Component {

    constructor(){
        super();
        this.state = {
            key1 : "This is the default state of a class component."
        }
        console.log("hello");
    }

    render() {
        return (
            <div>
                <button onclick="activateLasers()">
                    {this.state.key1}
                </button>
            </div>
        );
    }
}
 export default ButtonWithClass