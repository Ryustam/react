
import React,{useState} from "react";

function Example(){
    const [count, setCount]=useState(0);


  return(
    <div>
        <p> You Clicked {count} times</p>
        <button onClick={()=>setCount(count+1)}>
            +
        </button>
        <button onClick={()=>setCount(count-1)}>
            -
        </button>

    </div>
  );
}

export default Example;