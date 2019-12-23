import React, { Component } from 'react';

class sum extends Component {
    state = {
        count:0,
        first:0,
        second:0
    };
    addCount = () => {
        const { first,second } = this.state;
        this.setState({
            // 數字幫你處理好
           count:parseInt(first,10) + parseInt(second,10)
        });
    }
    onChange = (e)=>{
        this.setState({
            first: e.target.value,
        })
    }
    onChange2 = (e)=>{
        this.setState({
            second:e.target.value,
        })
    }
    render() {
        const { first,second,count} = this.state;
        return (
            <div>
                <label>數字</label>
                <input type='text' value={first} onChange={this.onChange} placeholder='fisrtNumber'/>
                <br/>
                <label>數字</label>
                <input type='text' value={second} onChange={this.onChange2}/>
                <p>the answer: {count}</p>
                <button onClick={this.addCount}> 計算 </button>
            </div>
        );
    }
}

export default sum;