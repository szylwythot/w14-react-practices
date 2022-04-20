import React, { Component } from 'react'

class ButtonWithClass extends Component {

    constructor(){
        super();
        this.state = {
            key1 : "Class ON",
            key2 : 0
        };
    }

    render() {
        return (
            <div>
                <button onClick={() => this.setState(() => { return {key1 : "Class off"}; })}>
                    {this.state.key1}
                </button>
                <button onClick={() => this.setState({key2 : 1})}>
                    {this.state.key2}
                </button>
            </div>
        );
    }
}

 export default ButtonWithClass