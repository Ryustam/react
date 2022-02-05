import React,{Component} from "react";
import "../css/InputComp.css"
class InputComp extends Component{
  constructor(props){
    super(props)

  }

  addCarInfo=()=>{
      alert("차량등록!")
  }

  render(){
    return(
      <div id="input-comp">
          <input type="text" placeholder="차량명 입력"/>
          <input type="text" placeholder="차량가격 입력"/>
          <input type="text" placeholder="차량연식 입력"/>
          <button onClick={this.addCarInfo}>등록</button>
      </div>
    );
  }
}

export default InputComp;
