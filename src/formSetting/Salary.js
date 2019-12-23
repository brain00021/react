import React, { Component } from 'react';

class Salary extends Component {
    state ={
        month:0,
        startTime: Date.now(),
        currentTime: Date.now(),
    };
    componentDidMount() {
        setInterval(
            () => {
                this.setState({ 
                   currentTime: Date.now(),
                });
            },1000
        )
    }
    onChangeMonth = (e) => {
        this.setState({ 
            month: parseInt(e.target.value,10) || 0,
        })
    }
    render() {
        const {month , startTime , currentTime} = this.state;
        const time = (currentTime - startTime) / 1000;
        return (
            <div>
                <label>月薪</label>
                <input type='text' value={month} onChange={this.onChangeMonth} />
                <label>時薪</label>
                <input type='text' value={month/240} />
                <label>分薪</label>
                <input type='text' value={month/240/60} />
                <label>秒薪</label>
                <input type='text' value={month/240/60/60} />
                <div>
                    <label>經過時間</label>
                    {time.toFixed(0)} 秒
                    <br/>
                    <label>經過時間</label>
                    {((time*month) / 240 /60 / 60).toFixed(2)}
                </div>
            </div>
            
        );
    }
}

export default Salary;