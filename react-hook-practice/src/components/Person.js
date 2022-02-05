
import React,{useState} from "react";

function Person({name,age,height}){

  return(
    <div>
      이름:{name} <br/>
      나이:{age}  <br/>
      키:{height} <br/>
    </div>
  );
}

export default Person;