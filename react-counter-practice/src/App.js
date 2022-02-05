import logo from './logo.svg';
import './App.css';
import React,{ Component } from 'react';
import Counter from './components/Counter.js';

class App extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="App">
        <Counter></Counter>
      </div>
    );
  }

}

export default App;
