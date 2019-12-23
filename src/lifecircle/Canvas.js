import React, { Component, createRef } from 'react';

class Canvas extends Component {
    ref= createRef();
    // render完後的第一次跑的生命週期
    componentDidMount() {
        const ctx = this.ref.current.getContext('2d');
        ctx.fillStyle = 'red';
        ctx.fillRect(10, 10, 30,30);
    }
    render() {
        return (
            <div>
                <canvas ref={this.ref}></canvas>
            </div>
        );
    }
}

export default Canvas;