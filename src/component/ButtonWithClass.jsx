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
            },
            countries : []
        };
        console.log("1");
    }
    
    componentDidMount() {
        console.log("3");
        fetch('https://restcountries.com/v3.1/all')
        .then( res => res.json())
        .then(countriesData => this.setState(
            () => {
                return {
                    countries: countriesData
                }
            },
            () => console.log(this.state)
            ));
    }
        
        render() {
            console.log("2");
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
                    <div>
                        {
                            this.state.countries.map((country, index) => 
                                <div key={index}>
                                    {country.name.common}
                                </div>
                            )
                        }
                    </div>
            </div>
        );
    }
}

 export default ButtonWithClass