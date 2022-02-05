import React,{ Component } from "react";
import "../css/Person.css";

class Person extends Component{
  
  constructor(props){
    super(props)
    this.state={
        edit:false,
        name:this.props.name,
        age:'',
        height:'',
    }
    
  }
  
  delPerson=()=>{
    alert("삭제(person)")
    const name=this.props.name
    this.props.deletePerson(name)
  }

  updatePerson=()=>{
    alert("수정(person)")
    if(this.state.edit === true){
        this.setState({
          edit:!this.state.edit
        })
        const {name,age,height}=this.state
        this.props.updatePerson(name,age,height)
    } else{
        this.setState({
          edit:!this.state.edit
        })
      }
  }


  handleChange=(e)=>{
      this.setState({
          [e.target.name]:e.target.value
      })
  }

  render(){
    
    if(this.state.edit===false){
    return(
    
      <div id="person">
         <div>
             이름:{this.props.name}
         </div>
         <div>
             나이:{this.props.age}
         </div>
         <div>
             키:{this.props.height}
         </div>
         <div>
             <button onClick={this.delPerson}>삭제</button>
             <button onClick={this.updatePerson}>수정</button>
         </div>
      </div>
    );
    } else if(this.state.edit===true){
    return(

        <div id="person">
         <div>
             이름:{this.props.name}
         </div>
         <div>
             나이:<input type="text" defaultValue={this.props.age} onChange={this.handleChange} name="age"/>
         </div>
         <div>
             키:<input type="text" defaultValue={this.props.height} onChange={this.handleChange} name="height"/>
         </div>
         <div>
             <button onClick={this.delPerson}>삭제</button>
             <button onClick={this.updatePerson}>수정</button>
         </div>
      </div>
      );
    }
  }
}

export default Person;