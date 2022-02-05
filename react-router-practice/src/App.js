import React,{ Component } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import AAA from "./subMenu/AAA.js";
import BBB from "./subMenu/BBB.js";
import CCC from "./subMenu/CCC.js";
import DDD from "./subMenu/DDD.js";
import './css/App.css';

function App() {
  return (
    <div>

    <div>
    <BrowserRouter>
        <div className='Menu-wrapper'>
          <ul>
            <Link to='/AAA'><li><a>aaa</a></li></Link>
            <Link to='/BBB'><li><a>bbb</a></li></Link>
            <Link to='/CCC'><li><a>ccc</a></li></Link>
            <Link to='/DDD'><li><a>ddd</a></li></Link>   
          </ul>
        </div>
        <div className='Contents-wrapper'>
          <Routes>
            <Route exact path='/AAA' element={<AAA/>} />
            <Route path='/BBB' element={<BBB/>} />
            <Route path='/CCC' element={<CCC/>} />
            <Route path='/DDD' element={<DDD/>} />
          </Routes>
        </div>
      </BrowserRouter>
       
    </div>
  
  </div>

  );
}

export default App;
