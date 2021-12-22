import React,{Component} from'react';
import "../css/Posts.css";
import MovieList from './MovieList.js';

class post extends Component{

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
        currentPage:1,
        postsPerPage:3
    }
  }

  render(){
    const result1=this.props.posts.map(
      (item,idx)=>(<MovieList key={idx} num={(idx+1)+((this.props.nums-1)*3)} cover_img={item.medium_cover_image} title={item.title}></MovieList>)
    )
    /*
    this.props.posts에는 app로부터 넘겨받은 json 배열을 map한다.
    map을 써서 컴포넌트 반복생성
    */

    return(
      <div id="posts">
        <ul>
            {result1}
        </ul>
      </div>
    );
  }
}

export default post;