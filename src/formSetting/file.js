import React, { Component } from 'react';

class file extends Component {
    state = {
        img:''
    }
    onChange = (e) => {
        const file = e.target.files.item(0);
        const fr = new FileReader(); // 瀏覽器內建的類別 可以讀取瀏覽器的內建檔案
        fr.addEventListener('load',this.fileLoad);
        fr.readAsDataURL(file);
    }
    fileLoad = (e) => {
        this.setState({
            img: e.target.result,
        })
    }
    submit = () => {
        debugger;
        // json base64
        // axios.post('api',{img:this.state.img})

        // multipart
        // const form = new FormData();
        // form.append(this.state.file);
        // axios.post('api',{form})
        
    }
    render() {
        return (
            <div>
                <input type='file' onChange={this.onChange} />
                <img width='100%' src={this.state.img}/>  
                <button onClick={this.submit}> Submit </button>
            </div>
        );
    }
}

export default file;