import React, { Component } from 'react';


class Child extends Component {
    state = {
        count: 0,
    };
    addCount = () => {
        this.setState({
            count: this.state.count + 1,
        });
    }
    render() {
        return (
            <div>
                <h1>Child:{this.state.count}</h1>
                 {/* 這是parent 去設計 */}
                <button onClick={this.props.addParentCount}> +Praent </button>
                <button onClick={this.addCount}> +Child </button>
            </div>
        );
    }
}

export default Child;