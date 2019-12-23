//核心
import React from 'react';
// render visual dom的
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
// import List from './List';
// import Message from './Message';
// import Counter from './Counter';
// import COunterProps from './Counter-Prop'
// import Input2 from './input2';
// import Parent from './Parent';
// import Child from './Child';
// import Progress from './Progress';
// import CardAll from './jsontest/AllCard';
// import AllBoutton from './cssprocessing/AllButton';
// import Sum from './formSetting/sum';
// import Text from './formSetting/text'
// ReactDOM.render(<Input2 />, document.getElementById('root3'));

// ReactDOM.render(<Text />, document.getElementById('root'));
// ReactDOM.render(<Message />, document.getElementById('root2'));


// props 進階三招的練習使用
// import Counter from './propsthreeway/Counter';
// import Counter2 from './propsthreeway/Counter2';
// import Counter3 from './propsthreeway/Counter3';

// //props3way第一招初始值在component render 提供 
// ReactDOM.render(
//     <div>
//         <Counter initCounter={10} /> 
//         <Counter2/>
//         <Counter3 initCounter='10'/>
//     </div>
// , 
// document.getElementById('root'));

// state 進階三招
// import Counter from './setStatethreeway/Counter';
// ReactDOM.render(
//     <div>
//         <Counter />
//     </div>
// , 
// document.getElementById('root'));

// refs 三招
// import Input2 from './refs/input2';
// ReactDOM.render(
//     <div>
//         <Input2 />
//     </div>
// , 
// document.getElementById('root'));

//組件三種
// import ComponentDifferent from './compoentDiffertype/Progress';
// ReactDOM.render(
//     <div>
//         <ComponentDifferent />
//     </div>
// , 
// document.getElementById('root'));

//class三種處理方式

// import ComponentDifferent from './cssprocessing/AllButton';
// ReactDOM.render(
//     <div>
//         <ComponentDifferent />
//     </div>
// , 
// document.getElementById('root'));

// array 練習
// import ComponentDifferent from './arrayPartice/List';
// ReactDOM.render(
//     <div>
//         <ComponentDifferent />
//     </div>
// , 
// document.getElementById('root'));

// import ComponentDifferent from './fileSelect/file';
// ReactDOM.render(
//     <div>
//         <ComponentDifferent />
//     </div>
// , 
// document.getElementById('root'));

//select radio 圖片上傳
import ComponentDifferent from './es6/export';
ReactDOM.render(
    <div>
        <ComponentDifferent />
    </div>
, 
document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
