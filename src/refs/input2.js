import React, { Component , createRef } from 'react';


class input2 extends Component {
    //官方建議用法
    myInput = createRef();
    // 生命週期函式 當頁面第一次render  componentDidMount第一次的render
    componentDidMount(){
        this.myInput.current.focus();
        //第一招 利用字串第一招的 refs用字串去輸入 但是目前準備要修改了 
        // this.refs.myInput.focus();
    }

    // 第二招 自訂函式 不需要生命週期
    // setRef = (input) =>{
    //     input.focus();
    //     console.log(input);
    // };
    render() {
        return (
            <div>
                <h3>Enter your name</h3>
                {/* 第三招 react推薦 */}
                <input type='text' ref={this.myInput} />
                {/* 第二招 */}
                {/* <input type='text' ref={this.setRef} /> */}
                {/* 第一招的 refs用字串去輸入 但是目前準備要修改了 */}
                {/* <input type='text' ref='myInput' /> */}
            </div>
        );
    }
}

export default input2;