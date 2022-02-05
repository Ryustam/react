import React,{Component} from "react";
import axios from "axios";
import "./App.css"

class App extends Component{
  constructor(props){
    super(props)
    this.state={
      data:'',
      no:3,
      author:'김철수',
      title:'title3',
    }
  }
  
  rootRequest=async()=>{
    alert("root 요청 전송!")
    const res=await axios.get('/')
  }

  HelloRequest=async()=>{
    alert("hello 요청 전송!")
    const res=await axios.get('/hello')
    this.setState({
      data:res.data
    })
  }

  ByeRequest=async()=>{
    alert("bye 요청 전송!")
    const res=await axios.get('/bye')
    this.setState({
      data:res.data
    })
  }

  getPosts=async()=>{
    alert("/get/posts 요청 전송!")
    const res=await axios.get('/get1/posts')
    this.setState({
      data:res.data
    })
  }

  getPostById=async()=>{
    alert("/getPostById 요청 전송!")
    const res=await axios.get('/get2/post/'+3)
    this.setState({
      data:res.data
    })
  }

  getPostByNoAndAuthor=async()=>{
    alert("/getPostById 요청 전송!")
    const res=await axios.get('/get3/post/'+3+"&"+"김철수")
    this.setState({
      data:res.data
    })
  }

  getPostByNoAndAuthorAndTitle=async()=>{
    alert("/getPostByNoAndAuthorAndTitle 요청 전송!")
    const res=await axios.get(`/get4/post/${this.state.no}&"${this.state.author}"&"${this.state.title}"`)
    //templete string
    //``


    this.setState({
      data:res.data
    })
  }

  addPost=async()=>{
    alert("/addPost 요청 전송!")
    var postObj={
      no:4,
      title:'title4',
      author:'김영희',
    }
    const res=await axios.post('/add/post/',postObj)

    //post는 추가요청
    //post보낸 객체는 req.body로 서버가 받는데
    //처음에 찍으면 req.body가 undefined로 나온다.
    //해결방법이 서버쪽에 bodyParser를 사용해서
    //body구문분석기


    this.setState({
      data:res.data
    })
  }

  putPost=async()=>{
    alert("/putPost 요청 전송!")
    var updatePostObj={
      title:'update title4',
      author:'김영희 사원'
    }
    const res=await axios.put('/put/post/'+4,updatePostObj)
    //4번 게시글 내용을 updataPostObj로 변경
    this.setState({
      data:res.data
    })
  }

  patchPost=async()=>{
    alert("/putPost 요청 전송!")
    var updatePostObj={
      title:'update title5',
    }
    const res=await axios.patch('/patch/post/'+4,updatePostObj)
    //4번 게시글 내용을 updataPostObj로 변경
    this.setState({
      data:res.data
    })
  }

  deletePost=async()=>{
    alert("/delete 요청 전송!")
    const res=await axios.delete('/delete/post/'+4)
    //4번 게시글 내용을 updataPostObj로 변경
    this.setState({
      data:res.data
    })
  }


  render(){


    return(
      <div id="App">
        <div>
          <div>
            응답데이터:{this.state.data}
          </div>
        </div>
        <button onClick={this.rootRequest}>
          루트요청
        </button>
        <button onClick={this.HelloRequest}>
          hello요청
        </button>
        <button onClick={this.ByeRequest}>
          bye요청
        </button>

        <button onClick={this.getPosts}>
          /get/posts
        </button>

        <button onClick={this.getPostById}>
          /get/post
        </button>

        <button onClick={this.getPostByNoAndAuthor}>
          /get/post/no&author
        </button>

        <button onClick={this.getPostByNoAndAuthorAndTitle}>
          /get/post/no&author&title
        </button>
        
        <button onClick={this.addPost}>
          /get/addPost
        </button>

        <button onClick={this.putPost}>
          /get/putpost
        </button>

        <button onClick={this.patchPost}>
          /patch/
        </button>

        <button onClick={this.deletePost}>
          /delete/
        </button>

      </div>
      
      


    );
  }
}

export default App;
