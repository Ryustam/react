import React,{Component} from 'react';
import "../css/MovieList.css"


class MovieList extends Component{
  constructor(props){
    super(props);

  }

  render(){
    return (
      <div id="MovieList" class={this.props.num}>
          <div></div>
            {this.props.title}
            {this.props.num}
            <br/>
            <img src={this.props.cover_img} alt="profile"/>
      </div>
    );
  }
}
export default MovieList;