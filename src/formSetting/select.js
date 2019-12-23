import React, { Component } from 'react';
const relationship = ['father','mom','brother','sister','younger']

const relationshipObjectVersion = [
    {value:0,label:'father'},
    {value:1,label:'Mom'},
    {value:2,label:'brother'},
    {value:4,label:'sisiter'}
]
class Select extends Component {
    state = {
        rel: `${relationshipObjectVersion[0].value}`
    };
    onChange = (e) => {
        this.setState({ 
            rel:e.target.value
        })
    }

    render() {
        const {rel} = this.state
        return (
            <div>
                <select value={rel} onChange={this.onChange}>
                    {relationshipObjectVersion.map((relationship)=>(
                        <option key={relationship.label} value={relationship.value}> 
                            {relationship.label}
                        </option>
                    ))}
                </select>
                <h1>
                    {rel}
                    {/* 因為 ref 是字串 並不是數字 */}
                    {relationshipObjectVersion.find(r => `${r.value}` === rel).label}
                </h1>
                
                
            </div>
        );
    }
}

export default Select;