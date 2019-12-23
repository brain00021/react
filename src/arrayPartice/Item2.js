import React,{Component} from 'react';

class Item2 extends Component{
    render(){
        // 如果不+ key值 render 會依照 function 一值重複 render
        
        return(
        <li> {this.props.children}</li>
        )
    }
}

export default Item2;