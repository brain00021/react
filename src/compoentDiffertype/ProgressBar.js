import React, { Component,PureComponent } from 'react';

// class component 基本的 component

// class ProgressBar extends Component {
//     render() {
//         const {value} = this.props;
//         return (
//             <div className='bar-outer'>
//                 <div
//                     className='bar-inner'
//                     style={{width:`${value}%`}}
//                 />
//                 <span>{value}%</span>
//             </div>
//         );
//     }
// }

// stateless function component 沒有state 的function 寫法

// const ProgressBar = (props) => {
//     const {value} = props;
//     return (
//         <div className='bar-outer'>
//             <div
//                 className='bar-inner'
//                 style={{width:`${value}%`}}
//             />
//             <span>{value}%</span>
//         </div>
//     );
// }


// pure component 可以調整效能 只比較 state 和 props 的第一層
// shallow compare

class ProgressBar extends PureComponent{
    render() {
        const {value} = this.props;
        return (
            <div className='bar-outer'>
                <div
                    className='bar-inner'
                    style={{width:`${value}%`}}
                />
                <span>{value}%</span>
            </div>
        );
    }
}

export default ProgressBar;