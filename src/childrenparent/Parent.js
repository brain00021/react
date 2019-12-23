import React, { Component , createRef } from 'react';
import Child from './Child';
import Child2 from './Child2';


class Parent extends Component {
    childRef = createRef();
    state = {
        count:0,
        childCount:0
    };
    addCount = () =>{
        this.setState({
            count: this.state.count +1
        });
    }
    addChildCount = () =>{
        //這個的子數件的addCount();
        this.childRef.current.addCount();
    }
    addChildCount2 = () =>{
        this.setState({
            childCount: this.state.childCount +1
        });
    }
    render() {
        return (
            <div>
                <h1>Parent:{this.state.count}</h1>
                <button onClick={this.addCount}> +Parent </button>
                <button onClick={this.addChildCount}> +Child </button>
                <Child ref={this.childRef} addParentCount={this.addCount}/>
                {/* 第二種方法 */}
                <Child2 
                count={this.state.childCount}
                addParentCount={this.addCount}
                addChildCount={this.addChildCount2}
                />
            </div>
        );
    }
}

export default Parent;