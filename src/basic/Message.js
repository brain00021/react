import React, { Component } from 'react';

class Message extends Component {
    
    state = {
        text: 'hello josh',
        title:' Message'
    }
    // 綁在 react 的方法
    // sayHi = () =>{
    //     // setState 更改狀態
    //     this.setState({ text: 'hello brian' });
    // }
    // 這邊是幫忙綁定function
    constructor(props){
        super(props);
        this.sayHi = this.sayHi.bind(this);
    }    
    sayHi(){
        this.setState({ text:'hi'})
    }

    // 單純的綁定 component 的 function
    sayHiforcomponent = () => {
        this.setState({ text:'hi 我是component 的 this'})
    }
    render() {
        return (
            <div>
                <h3>{this.state.title}</h3>
                <h1>{this.state.text}</h1>
                {/* 指定專屬的componet mehtos */}
                <button onClick={this.sayHiforcomponent}> change hi for Compoent</button>
                {/* 這邊則是直接宣告的this是這顆元件 */}
                <button onClick={this.sayHi}> change hi</button>
            </div>
        );
    }
}

export default Message;