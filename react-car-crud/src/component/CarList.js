import React,{Component} from "react";
import Car from "./Car";
import "../css/CarList.css"

class CarList extends Component{
  constructor(props){
    super(props)

  }

  render(){


    const result=this.props.carList.map(
        (data)=>(<Car
        key={data.id} carName={data.carName} price={data.price} year={data.year}
        carImg={data.carImg}/>)
    )

    return(
      <div id="car-list">
          {result}
      </div>
    );
  }
}

export default CarList;
