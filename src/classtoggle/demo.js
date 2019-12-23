import React, { Component } from 'react';
import { thisTypeAnnotation } from '@babel/types';
import modelpicture from './malemodel.jpg';

class Demo extends Component {
    state = {
        visible: true,
    }
    toggle= () => {
        this.setState(
            {
                visible: !this.state.visible,
            }
        );
    }
    render() {
        const {visible} = this.state;
        const styleObj = {display:visible ? 'block' : 'none'};
        const cn = visible? ' image' : 'image hide';
        return (
            <div>
                <button onClick={this.toggle}>toggle</button>
                <img style={{display:visible ? 'block' : 'none'}} src={modelpicture} />
                <button onClick={this.toggle}>toggle</button>
                <img style={styleObj} src={modelpicture} />
                <button onClick={this.toggle}>toggle</button>
                <img className={cn} src={modelpicture} />
                <img className={`image ${visible ? '' : 'hide'}`} src={modelpicture} />
            </div>
        );
    }
}

export default Demo;