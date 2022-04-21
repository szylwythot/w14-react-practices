import React, { Component } from 'react'

class ButtonWithClass extends Component {

    constructor(){
        super();
        this.state = {
            key1 : "Class ON",
            key2 : 0,
            title : {
                main: "Main title",
                sub: "Sub title"
            }
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
                {/* <button onClick={() => {
                        this.state.key2 = 1;
                        console.log(this.state);
                    }}>
                    {this.state.key2}
                </button> */}
                {/* <button onClick={() => {
                    this.setState({
                        title : {
                            main: "h1",
                            sub: "subtitle"
                        }
                    })
                    console.log(this.state);
                    }}>{this.state.title.main}
                </button> */}
                <button onClick={() => {
                    this.setState(
                    () => {
                        return {
                            title : {
                                main: "h1",
                                sub: "subtitle"
                            }
                        };
                    },
                    () => {
                        console.log(this.state);
                    })
                    }}>{this.state.title.main}</button>
            </div>
        );
    }
}

 export default ButtonWithClass