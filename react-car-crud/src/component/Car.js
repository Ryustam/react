import React,{Component} from "react";
import "../css/Car.css"


class Car extends Component{
  constructor(props){
    super(props)

  }

  render(){
    return(
      <div id="car">
          <div id="car-left">
            <img src={this.props.carImg}></img>
          </div>
          <div id="car-right">
            <div>{this.props.carName}</div>
            <div>{this.props.price}</div>
            <div>{this.props.year}</div>
          </div>
      </div>
    );
  }
}

export default Car;
