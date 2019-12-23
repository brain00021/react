import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count:0,
        step:1,
        time:false,
        autoCountFn:function(){},
    }
    addCount = () =>{
        // setCount 第二種方法 確認api出現正確的的數字
        const {count, step} = this.state;
        this.setState({
            count: count + step,
            step: step + 1,
            },
            () => {
                this.sendCount();
            }
        );
        // 如果要確認api的值是更改setState要放在setState 裡面
        // this.sendCount(); 這裡抓的數字會錯誤
    }
    sendCount = () => {
        // fetch(`/api/count?value=${this.state.count}`)
        console.log('確認數字是',this.state.count);
    }
    addCountMultiple = () =>{
        // setCount 第一種方法 確認value回傳正確
        // 確認value跑完第一個 在同不去第二個 setState 他是 async(非同步) 操作
        this.setState((state) => {
            return{
                count: state.count +1
            }
        });
        // 可利用大bracket
        this.setState((state) => ({
            count: state.count +1
        }));
        this.setState((state) => ({
            count: state.count +1
        }));
    }
    autoCount = ()=>{
        if(!this.state.time){
            this.autoCountFn = setInterval(this.addCount,1000)
            this.state.time = true;
        }else{
            clearInterval(this.autoCountFn);
            this.state.time = false;
        }
    }
    render() {
        const {count, step} = this.state;
        return (
            <div>
                <h1>{count}</h1>
                <button onClick={this.addCount}> +{step} </button>
                <button onClick={this.autoCount}> toggle </button>
                <button onClick={this.addCountMultiple}> + 3 </button>
            </div>
        );
    }
}

export default Counter;