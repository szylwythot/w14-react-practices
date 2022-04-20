import React, { Component } from 'react'

class ButtonWithClass extends Component {

    constructor(){
        super();
        this.state = {
            key1 : "Class ON"
        };

        // this.handleClick = () => {
        //     this.setState({key1 : this.key1 === "Class ON" ? "Class OFF" : "Class ON"});
        //     // this.setState(prevState => {
        //         //     console.log(prevState.key1);
        //         //         let text = prevState.key1 = "Class ON" ? "Class OFF" : "Class ON";
        //         //         return {key1 : text};
        //         //     }
        //         // );
        //     }
    }

    render() {
        return (
            <div>
                <button onClick={() => this.setState(() => { return {key1 : "Class off"}; })}>
                    {this.state.key1}
                </button>
            </div>
        );
    }
}

 export default ButtonWithClass