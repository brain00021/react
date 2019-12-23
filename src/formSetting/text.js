import React, { Component } from 'react';

class text extends Component {
    state = {
        valueText:''
    }
    changeText = (e)=>{
        this.setState({ 
            valueText: e.target.value
        })
    }
    render() {
        const { valueText } = this.state;
        return (
            <div>
                <label> please enter your name:</label>
                <input type="text" onChange={this.changeText}/>
                <h1>Your name is {valueText}</h1>
            </div>
        );
    }
}

export default text;