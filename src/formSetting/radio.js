import React, { Component } from 'react';

class radio extends Component {
    state = {
        gender:'male',
        like:{
            male:true,
            female:false,
        }
    };
    onChangeGender = (e) => {
        this.setState({
            gender:e.target.value
        })
    }
    onChangeLike = (e) => {
        const key = e.target.value;
        this.setState((state) => ({
            like:{
                ...state.like,
                [key]: !state.like[key],
            },
        }))
    }
    render() {
        const {gender,like} = this.state
        return (
            <div>
                <span>Your gender:</span>
                <label>male</label>
                <input type='radio' value='male' onChange={this.onChangeGender} checked={gender === 'male'} />
                <label>female</label>
                <input type='radio' value='female' onChange={this.onChangeGender} checked={gender === 'female'}  />
                <div>
                    You Like:
                    <label>Male</label>
                    <input type='checkbox' value='male' onChange={this.onChangeLike} checked={like.male} />
                    <label>Female</label>
                    <input type='checkbox' value='female' onChange={this.onChangeLike} checked={like.female} />
                </div>
                <pre>
                    {JSON.stringify(this.state,null,2)}
                </pre>
            </div>
        );
    }
}

export default radio;