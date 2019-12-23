import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    count:1,
  }
  addCount = () =>{
    this.setState({
      count: this.state.count +1
    })
  }
  render() {
    /* JSX 語法 一定要close
    // <div/> self closed
    // className/ htmlFor
    4. onClick / onChange
    5. 大括號 去刮出 js syntax
    */ 
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>{this.state.count}</h1>
          <button onClick={this.addCount}> add number</button>
          <p>
            Edit test <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <div id='#root2'></div>
        </header>
      </div>
    );
  }

}

export default App;
