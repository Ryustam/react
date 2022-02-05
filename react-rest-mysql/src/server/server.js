
const express=require('express')
const app = express();
const PORT = process.env.PORT || 4000;
const bodyParser=require('body-parser')
const db = require('./config/db');


app.use(bodyParser.json())


app.get("/get/getPersonList",(req,res)=>{
    console.log("/get/getPersonList request")
    db.query("select * from person",
    (err,dbdata)=>{
        if(!err){
            console.log("성공!")
            res.send({personList_res:dbdata})
        }else{
            res.send(err)
            console.log("실패!")
            console.log(err)
        }
    })
})

app.post("/post/person/:name&:age&:height",(req,res)=>{
    console.log("/post/person/:name&:age&:height request")
    const {name,age,height}=req.params
    //ex) const name=req.params.name
    console.log(name)
    db.query(`insert into person values(${name},${age},${height})`,
    //template string ``
    (err,dbdata)=>{
        if(!err){
            console.log("데이터 추가 성공!")
            
        }else{
            res.send(err)
            console.log("데이터 추가 실패!")
            console.log(err)
        }
    })
}) 

app.delete("/del/person:name",(req,res)=>{
    console.log("/del/person:name request")
    const name=req.params.name
    db.query(`delete from person where name="${name}"`,
    //template string ``
    (err,dbdata)=>{
        if(!err){
            console.log("삭제 성공!")
            
        }else{
            res.send(err)
            console.log("삭제 실패!")
            console.log(err)
        }
    })
}) 

app.put("/put/person:name",(req,res)=>{
    console.log("/put/person:name request")
    const name=req.params.name
    const age=req.body.age
    const height=req.body.height

    db.query(`update person set age="${age}", height="${height}"where name="${name}"`,
    //template string ``
    (err,dbdata)=>{
        if(!err){
            console.log("수정 성공!")
            
        }else{
            res.send(err)
            console.log("수정 실패!")
            console.log(err)
        }
    })
}) 


app.listen(PORT,()=>{
    console.log(`Server On:http://localhost:${PORT}`)
})