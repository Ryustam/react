
import React,{useState} from "react";

function InputComp(){

    const [todo,setTodo]=useState('')

    const addTodo=()=>{
        alert("추가!(InputComp")
    }


  return(
    <div>
      <input type="text"/>
      <button onClick={addTodo}>추가</button>
    </div>
  );
}

export default InputComp;