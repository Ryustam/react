import React,{ Component } from "react";

class InputComp extends Component{
  
  constructor(props){
    super(props)
    this.state={
        name:'',
        age:'',
        height:'',
    }
  }
  
  addPerson=()=>{
      alert("추가!(InputComp)")
      const {name,age,height} = this.state
      //비구조화할당(구조분해할당)
      //state에 값을 나눠서 왼쪽에 할당
      //ex) const name = this.state.name
      //검사완료되고

      this.props.addPerson(name,age,height)
  }

  handleChange=(e)=>{
      this.setState({
        [e.target.name]:e.target.value
      })
  }

  render(){
    
    return(
      <div id="input-comp">
        <input type="text" placeholder="이름입력" onChange={this.handleChange} name="name"/>
        <input type="text" placeholder="나이입력" onChange={this.handleChange} name="age"/>
        <input type="text" placeholder="키입력" onChange={this.handleChange} name="height"/>
        <button onClick={this.addPerson}>추가</button>
      </div>
    );
  }
}

export default InputComp;