import React,{Component} from'react';
import "../css/Pagination.css";

class pagination extends Component{

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
        postsPerPage:3,
    }
  }

  pageClick=(page)=>{
    alert(page+"페이지 클릭!")
    this.props.setCurrentPage(page)
    this.setAllDefault()
    var page = document.getElementById("page"+page);
    page.style.backgroundColor="gray";
    
  }

  setAllDefault=()=>{
    var page=document.getElementsByClassName("page")
    for(var i=0; i<page.length; i++){
      page[i].style.backgroundColor="bisque";
    }
  }


  prevPage=()=>{
    const nums=this.props.nums
    if (this.props.nums==1) {
      /*this.props.setCurrentPage(1)*/
    } else {
      this.setAllDefault()
      this.props.setCurrentPage(nums-1)
      var page = document.getElementById("page"+(nums-1));
      page.style.backgroundColor="gray";
    }
    
  }

  nextPage=()=>{
    const nums=this.props.nums
    const totalPosts=this.props.totalPosts //총글갯수(10)
    const postsPerPage=this.props.postsPerPage //페이지당글갯수(3)

    if (this.props.nums==Math.ceil(totalPosts/postsPerPage)) {
      /*this.props.setCurrentPage(nums)*/
    } else {
      this.setAllDefault()
      this.props.setCurrentPage(nums+1)
      var page = document.getElementById("page"+(nums+1));
      page.style.backgroundColor="gray";
    }
    
  }


  render(){
    
    const totalPosts=this.props.totalPosts //총글갯수(10)
    const postsPerPage=this.props.postsPerPage //페이지당글갯수(3)
    let pageNumber=[]  //빈배열
    //올림
    for(let i=1;i<=Math.ceil(totalPosts/postsPerPage);i++){
        pageNumber.push(i)
    }

    const pageList=pageNumber.map(
        (page)=>
        (<span className="page" id={"page"+page} onClick={()=>this.pageClick(page)}>{page}</span>)
    )

    return(
      <div id="pagination">
        <span className="page" onClick={()=>this.prevPage()}>&lt;</span>
        {pageList}
        <span className="page" onClick={()=>this.nextPage()}>&gt;</span>
      </div>
    );
  }
}

export default pagination;