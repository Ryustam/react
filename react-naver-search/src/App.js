
import React, {Component} from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import  './App.css';
import Home from './components/Home';
import Search from './components/Search';

class App extends Component{
  constructor(props){
    super(props)
    this.state={
      searchText:''
    }
  }
  searchBook=()=>{
    alert("검색!")
    const searchText=this.state.searchText
    if(searchText===''){
      alert("검색어를 입력 하십시오")
      return
    }
    window.location.href="/search?bookName="+searchText+"&page=1"
    //<a href=""/>
    //<a window.location.href=""/>
    //윈도우 객체의 하부 객체인 location객체의 href속성값을 준다.
  }
  handleChange=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  render(){
    return(
      <div id="app">
        <BrowserRouter>
            <div id="search-area">
              <input type="text" placeholder="검색어 입력"
              onChange={this.handleChange} name="searchText"/>
              <button onClick={this.searchBook}>검색</button>
            </div>
              
          <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route path="/search" element={<Search/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;