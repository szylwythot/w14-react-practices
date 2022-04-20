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
            <div>{this.state.key1}</div>
        );
    }
}
 export default ButtonWithClass