import React,{Component} from 'react';

class Item2 extends Component{
    render(){
        return(
        <li> {this.props.children}</li>
        )
    }
}

export default Item2;