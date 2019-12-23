import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

// class component 組件的三種不同的樣式
class Progress extends Component {
    state = {
        value: 0,
        /* info 的 x:1 
        是 測試pureCompoent 狀況 記得把上面 Component 
        換成 pureComponent 才知道console.log的狀況
        裡面的 x會 只有 Component
        */
        info:{
            x:1,
        }
    };
    add = () => {
        const {info} = this.state;
        info.x += 1;
        this.setState({ 
            value: this.state.value + 1,
            // purComponent 不會執行 這一層的info
            info: info,
        })
    }
    render() {
        const {value} = this.state;
        console.count('Progress render')
        return (
            <div>
                <ProgressBar
                 value={value}/>
                <button onClick={this.add}> +1 </button>
            </div>

        );
    }
}

export default Progress;