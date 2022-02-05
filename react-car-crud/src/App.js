import React,{Component} from "react";
import InputComp from "./component/InputComp";
import CarList from "./component/CarList";
import "./App.css"

class App extends Component{
  constructor(props){
    super(props)
    this.state={
      carList:[
        {id:1111,carName:'아반떼',price:2200,year:2020,carImg:'/image/avante.png'},
        {id:2222,carName:'소나타',price:2500,year:2021,carImg:'/image/sonata.png'},
        {id:3333,carName:'벤츠',price:6000,year:2022,carImg:'/image/benz.png'},
      ]
    }
  }

  render(){


    return(
      <div id="App">
        <InputComp></InputComp>
        <CarList carList={this.state.carList}></CarList>
      </div>
    );
  }
}

export default App;
