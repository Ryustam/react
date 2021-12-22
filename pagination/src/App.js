import React,{Component} from'react';
import Pagination from './components/Pagination.js';
import Posts from './components/Posts.js'
import axios from 'axios';
import MovieList from './components/MovieList.js';

class App extends Component{

  constructor(props){
    super(props)
    this.state={
      posts:[
          {no:10,title:'title10'},
          {no:9,title:'title9'},
          {no:8,title:'title8'},
          {no:7,title:'title7'},
          {no:6,title:'title6'},
          {no:5,title:'title5'},
          {no:4,title:'title4'},
          {no:3,title:'title3'},
          {no:2,title:'title2'},
          {no:1,title:'title1'},
      ],
      movieList:[],
      num:0,
      currentPage:1,
      postsPerPage:3
    }
  }

  componentDidMount(){
    this.getMovies()
  }

  getMovies=async()=>{
    const axios_movies
    =await axios.get("https://yts.mx/api/v2/list_movies.json")
    console.log(axios_movies)
    //ajax관련 메서드 axios
    //자바에서는 $.ajax ...
    //리엑트에서는 axios
    this.setState({
      movieList:axios_movies.data.data.movies
    })
    //길이가 20인 JSON배열
  }

  setCurrentPage=(page)=>{
    alert("페이지변경!(App)")
    this.setState({
      currentPage:page
    })
  }

  prevPage1=()=>{
    alert("이전 페이지!(App")
    const currentPage=this.state.currentPage
    this.setState({
      currentPage:currentPage-1
    })
  }

  nextPage1=()=>{
    
  }



  currentPosts=(totalPosts)=>{
    
    const currentPage=this.state.currentPage
    const postsPerPage=this.state.postsPerPage

    const indexOfLast=currentPage*postsPerPage
    const indexOfFirst=indexOfLast-postsPerPage
    //1페이지 3,0 ->slice(0,3) - 0,1,2
    //2페이지 6,3 ->slice(3,6) - 3,4,5
    const slicePosts=totalPosts.slice(indexOfFirst,indexOfLast)

    return slicePosts;
  }

  render() {
    return(
      <div id="app">
        <Posts posts={this.currentPosts(this.state.movieList) } nums={this.state.currentPage}></Posts>
        <Pagination postsPerPage={this.state.postsPerPage} 
        totalPosts={this.state.movieList.length} 
        setCurrentPage={this.setCurrentPage}
        nums={this.state.currentPage}
        prevPage1={this.prevPage1}
        nextPage1={this.nextPage1}></Pagination>
      </div>
    );
  }
}

export default App;
