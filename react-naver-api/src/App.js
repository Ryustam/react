import './App.css';
import React,{Component} from 'react';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      movieList:[

      ],
    }
  }

  
  getMovies = async()=>{
    const axios_movies
    = await axios({
      method:'get',
      url:'/v1/search/book.json?query="사피엔스"',
      dataType:'json',
      headers:{
        "X-Naver-Client-Id": 'cyFXzfzu5gwhIxUGrBrK',
        "X-Naver-Client-Secret": 'uZRTbRiMLl'
      }
    })
    console.log(axios_movies)
    console.log(axios_movies.data.items)
  }
  

  componentDidMount(){
    this.getMovies()
  }
  
  render(){
    return (
      <div id="App">
      
      </div>      
    );
  }
}

export default App;
