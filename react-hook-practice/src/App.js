
import React,{useState} from "react";
import Example from "./components/Example";
import InputComp from "./components/InputComp";
import Person from "./components/Person";

function App(){
  const[name,setName]=useState('이민호');
  const[age,setAge]=useState(20);
  const[height,setHeight]=useState(176.5);
  
  function myFunc(){
    alert("myFunc!")
  }

  const myFunc2=()=>{
    alert("myFunc2!")
  }

  const [todoList,setTodoList]=useState([
    {id:1,todo:'공부하기'},
    {id:2,todo:'청소하기'},
    {id:3,todo:'요리하기'},
  ])

  return(
    <div>
      <Example></Example>
      <Person name={name} age={age} height={height}/>
      <button onClick={myFunc}>클릭</button>
      <button onClick={myFunc2}>클릭</button>
      <InputComp></InputComp>
    </div>
  );
}

export default App;
