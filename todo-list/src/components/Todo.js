import React,{ Component } from 'react';
import "../css/Todo.css"

class Todo extends Component{

  constructor(props) {
    super(props)

  }

  delTodo=()=>{
      alert("삭제!(Todo)")
      alert(this.props.id+"번 삭제!")
      this.props.delTodo(this.props.id)
  }

  render(){
    return(
      <div id="todo">
        {this.props.id+" "}
        {this.props.todo}
        <button onClick={this.delTodo}>삭제</button>
      </div>
    );
  }

}
export default Todo;


