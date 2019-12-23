import React,{Component} from 'react';

class Item extends Component{
    render(){
        console.log( `list key`,this.props.text)
        return(
        <li> {this.props.text}</li>
        )
    }
}

export default Item;