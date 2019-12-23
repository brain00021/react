import React, { Component } from 'react';
//檢查屬性
import PropTypes from 'prop-types';
// import 假設要給一個數字而不是字串 但你的同事給的是string
class Counter extends Component {

    //初始值的靜態
    // static propTypes = {
    //     initCounter: PropTypes.number,
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
//檢查確認是不是數字第二種方法
Counter.propTypes = {
    initCounter: PropTypes.number,
}


export default Counter;
