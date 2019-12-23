import React, { Component } from 'react';

class Chat extends Component {
    state= {
        text:'',
        content:[],
    }
    onChangeText = (e) => {
        this.setState({
            text:e.target.value,
        })
    }
    submit=(e) => {
        e.preventDefault()
        const {text,content} = this.state;
        this.setState({
            text:'',
            content:[...content,text],
        });
    }
    render() {
        const {text,content} = this.state
        return (
            <div>
                <form onSubmit={this.submit} >
                <input value={text} onChange={this.onChangeText}/>
                <button type='submit'> Submit</button>

                </form>

                <ul>
                    {content.map((c) => (
                        <li>{c}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Chat;