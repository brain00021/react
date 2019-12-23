import React, { Component } from 'react';

class List extends Component {
    state = {
        item:[],
    };
    // componentDidMount撈資料三種方法
    // 第一種撈資料
    componentDidMount() {
        fetch('http://...../api/list')
            .then(response => response.json())
            .then((data) => {
                this.setState({
                    items:data,
                })
            })
    }
    // 第2種撈資料
    async componentDidMount() {
        const response = await fetch('http://...../api/list')
        const data = await response.json();    
        this.setState({
            items:data,
        })
    }

    // 第三種
    componentDidMount() {
        this.fetchList();
    }
    fetchList = async () => {
        const response = await fetch('http://...../api/list')
        const data = await response.json();    
        this.setState({
            items:data,
        })
    }
    render() {
        const { item } = this.state;
        return (
            <div>
                {
                    item.map((item) => (
                        <li key={item.id}>{item.text}</li>
                    ))
                }
            </div>
        );
    }
}

export default List;