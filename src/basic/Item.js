import React, { Component } from 'react';

// static property  靜態屬性

class Item extends Component {
    // static 用法
    static propTypes = {

    }
    static getDerivedStateFromProps(nextProps, prevProps) {
        
    }
    // state 這個可以有不同的做法
    state={
        x:1,
        count:0
    }
    constructor(props) {
        super(props); // 一定要輸入super 並且把 props放進去
        this.state ={
            // this 通常都是代表class 但是如果 你的function自己 xxx(){} this代表點擊的dom
        }
        // 如果 onclick(){} 以下的作法 讓onclick可以吃到class本身的 this
        this.onclick = this.onclick.bind(this);

        // 裡面不要跑這些東西
        /*
         1. setState
         3. 不要state 裡面跑 props 除非父元素 你只想讓他第一次有效 其他的更新都不管
         2.不要執行 ajax 函式
        */
    }
    // 生命週期的函式一定指 component 本身 包含this也是
    
    componentDidMount() {
        // 這邊要做的事情可以做撈資料的動作

    }
    componentDidUpdate(prevProps, prevState) {

    }
    // 如果你使用但這邊的this不一定是組件
    onclick(){}
    // 這個一定是組件
    onclick = () => {

    }
    // render 就是把資料轉成視覺畫面
    render() {
        // 禁止使用 this.setState(); 會當掉 因為組件會一值重新定義
        // 禁止 fetch or axios

        // 帶可以定義一些const 做資料轉換
        return (
            <div>
                
            </div>
        );
    }
}

export default Item;