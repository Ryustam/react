import './App.css';
import React,{ Component } from 'react';
import Todo from './components/Todo.js';
import InputComp from'./components/InputComp.js';

class App extends Component{

  constructor(props){
    super(props)
    this.state={
      id:4,
      toDoList:[
        {id:1,todo:'공부하기'},
        {id:2,todo:'요리하기'},
        {id:3,todo:'운동하기'},
      ]
    }
  }

  addTodo=(todoVal)=>{
    alert("추가!(App)")
    alert("App가 넘겨받은 값:"+todoVal)
    //실질적인 항목 추가 (JSON배열의 항목 추가)
    const todoObj={id:this.state.id,todo:todoVal}
    this.setState({
      toDoList:this.state.toDoList.concat(todoObj)
    })
    this.setState({
      id:this.state.id+1
    })
  }

  delTodo=(delID)=>{
    alert("삭제!(App)")
    alert("app가 넘겨받은 삭제할 아이디:"+delID)
    //delID값이 일치하는 JSON배열의 항목을 제거
    const filtered=this.state.toDoList.filter(
      item=>(item.id != delID)
    )
    //filter는 조건으로 걸러서 새로운 배열을 만듬
    this.setState({
      toDoList:filtered
    })
  }

  render(){
    const result=this.state.toDoList.map(
      item=>(<Todo key={item.id} id={item.id} todo={item.todo} delTodo={this.delTodo}></Todo>)
    )
    return(
      <div className="App">
        <InputComp addTodo={this.addTodo}></InputComp>
        {result}
      </div>
    );
  }

}

export default App;
