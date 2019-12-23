import React, { Component } from 'react';


class Child2 extends Component {
    render() {
        const {count, addParentCount, addChildCount} = this.props;
        return (
            <div>
                <h1>Child2:{count}</h1>
                 {/* 這是parent 去設計 */}
                <button onClick={addParentCount}> +Praent </button>
                <button onClick={addChildCount}> +Child </button>
            </div>
        );
    }
}

export default Child2;