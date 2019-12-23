import React,{Component} from 'react';
import Item from './Item';
import Item2 from './Item2';
class List extends Component{
    render(){
        return(
           <ol>
                <Item text="LEARN JAVASCRIPT"/>
                <Item text="LEARN JAVASCRIPT" price="100"/>
                <Item text="LEARN JAVASCRIPT"  price={100}/>
                <Item2> list props children {100+1} </Item2>
           </ol>
        )
    }
}

export default List;