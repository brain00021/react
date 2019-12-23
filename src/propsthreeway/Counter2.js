import React, { Component } from 'react';

class Counter extends Component {
    //初始值的靜態
    // static defaultProps = {
    //     initCounter:10
    // }

    constructor(props) {
        super(props); // super 就是 components;
        this.state = {
            count:props.initCounter,
        };
    }
    // state = {
    //     count:0
    // };
    addCount = () => {
        this.setState({ 
            count:this.state.count + 1
        })
    }
    render() {
        const {count} = this.state;
        return (
            <div>
                <h1>{count}</h1>
                <button onClick={this.addCount}> +1 </button>
            </div>
        );
    }
}

// 第二種靜態的處理方式 另外放預設
Counter.defaultProps = {
    initCounter:0,
}

export default Counter;
