import React,{Component} from 'react';
import Item from './Item';
import Item2 from './Item2';
// array render
const steps = [
    'abc',
    'jab', 
    'cdb',
];
const info = {
    name: 'abc',
    price: 100,
    vidoes: 60,
    teacher:'start'
};
const info2 = [
    {id:1 ,label:'name 解構',data: 'abc'},
    {id:2 ,label:'price 解構',data: 100},
    {id:3 ,label:'vidoes 解構',data: 60},
    {id:4 ,label:'teacher 解構',data:'start'}];


class List extends Component{

    // 拿取外面的 const
    constructor(props) {
        super(props); // super 就是 components;
        this.state = {
            listKey:info2,
        };
    }

    removeFirst = () => {
        this.setState({
            listKey:this.state.listKey.slice(1),
        })
    }
    render(){
        return(
            <div>
                <ol>
                    {/* 利用javascript map來去處理這一塊的紀錄 
                    跟v-for 的一個用法
                    */}
                        {steps.map((text,idx) => (
                        // 使用 index 可以處理掉 error 錯誤但還是吃效能 跟重新render 
                        <Item2 key={idx}> {text} {idx} </Item2> ))}
                </ol>
                <ol>       
                        {/* object 的設定利用 keys來做設定 */}
                        {Object.keys(info).map((key,idx)=>{
                            const value = info[key];
                            return (
                                <Item2 key={idx}>
                                    {key}: {value}
                                </Item2>
                            )
                        })}
                    {/*把object 轉成 陣列 之後在解構*/ }
                        {info2.map(({label,data,id}) => (
                        <Item2 key={id}> {label} {data} </Item2> ))}
                </ol>
                <ol>
                    {/*把object 轉成 陣列 之後在解構*/ }
                    {this.state.listKey.map(({label,data,id}) => (
                        <Item key={id} text={label}/> ))}
                        
                </ol>
                <button onClick={this.removeFirst}> - </button>
           </div>
        )
    }
}

export default List;