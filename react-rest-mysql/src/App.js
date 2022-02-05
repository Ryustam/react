import React,{ Component } from "react";
import axios from "axios";
import Person from './components/Person.js'
import InputComp from "./components/InputComp.js";


class App extends Component{
  
  constructor(props){
    super(props)
    this.state={
      personList:[

      ],
      response:''
    }
  }
  
  componentDidMount(){
    //ready메서드 (DOM장착 완료되고...작업가능해졌을때)
    this.getPersonList()
  }

  getPersonList=async()=>{
    alert("getPersonList 요청 전송!")
    const res=await axios.get('/get/getPersonList')
    this.setState({
      personList:res.data.personList_res
    })
  }

  addPerson=(name,age,height)=>{
    alert("추가!(App)")
    alert(name)
    alert(age)
    alert(height)
    const personObj={name:name,age:age,height:height}
    const concatPersonList=this.state.personList.concat(personObj)
    this.setState({
      personList:concatPersonList
    })
    
    this.addPersonDB(name,age,height)
  }

  addPersonDB=async(name,age,height)=>{
    alert("person DB 추가요청 전송!")
    
    const res=await axios.post(`/post/person/"${name}"&${age}&${height}`)
    
  }



  delPerson=(name)=>{
    alert("삭제(App)")
    alert("삭제할 이름:"+name)

    const filterPersonList=this.state.personList.filter(
      (data)=>(data.name != name)
    )

    this.setState({
      personList:filterPersonList
    })

    this.delPersonDB(name)

  }

  delPersonDB=async(name)=>{
    alert("person DB 삭제요청 전송!")
    const res=await axios.delete('/del/person'+name)
  }

  updatePerson=(name,age,height)=>{
    alert("수정(App))")
    
    const updateObj={age:age,height:height}

    const updatePersonList=this.state.personList.map(
      (data)=>(data.name==name)? ({...data,...updateObj}):data
    )
    
    this.setState({
      personList:updatePersonList
    })

    this.updatePersonDB(name,age,height)
  }

  updatePersonDB=async(name,age,height)=>{
    alert("person DB 수정요청 전송!")
    var updatePostObj={
      age:age,
      height:height
    }
    const res=await axios.put('/put/person'+name,updatePostObj)
  }


  render(){
    const result=this.state.personList.map(
      (data,index)=>(<Person key={index} 
        name={data.name} 
        age={data.age} height={data.height}
        deletePerson={this.delPerson}
        updatePerson={this.updatePerson}/>)
    )
    
    return(
      <div>
        <InputComp addPerson={this.addPerson}></InputComp>
        {result}
      </div>
    );
  }
}

export default App;
