import React,{ Component } from 'react';
import '../css/InputComp.css';

class InputComp extends Component{

  constructor(props){
    super(props)
    this.state={
        todo:''
    }
  }

  addTodo=()=>{
      alert("추가!(InputComp)")
      alert(this.state.todo)
      this.props.addTodo(this.state.todo) //넘겨받은 addTodo
      //App.js의 addTodo 메서드
  }

  handleChange=(e)=>{
      //매개변수e가 event객체를 넘겨받는다.
      this.setState({
          todo:e.target.value
      })
  }

  render(){
    return(
      <div id="input-comp">
        <h1>할일 입력</h1>
        <input type="text" onChange={this.handleChange}/>
        <button onClick={this.addTodo}>추가</button>
      </div>
    );
  }

}
export default InputComp;