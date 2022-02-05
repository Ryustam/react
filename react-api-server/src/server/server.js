
const express=require('express')
const app = express();
const PORT = process.env.PORT || 4000;
const bodyParser=require('body-parser')

app.use(bodyParser.json())

app.get("/",(req,res)=>{
    console.log("root request")
})

app.get("/hello",(req,res)=>{
    console.log("hello request")
    res.send("hello response")
})

app.get("/bye",(req,res)=>{
    console.log("bye request")
    res.send("bye response")
})

app.get("/get1/posts",(req,res)=>{
    console.log("/get/posts request")
    res.send("/get/posts response")
})

app.get("/get2/post/:no",(req,res)=>{
    console.log("/get/post/:no request")
    console.log("req:",req)
    console.log("req.params:",req.params)
    console.log("req.params.no:",req.params.no)
    //select * from posts where no=req.params.no
    res.send("/get/post/:no response")
})

app.get("/get3/post/:no&:author",(req,res)=>{
    console.log("/get3/post/:no&:author")
    console.log("req:",req)
    console.log("req.params:",req.params)
    console.log("req.params.no:",req.params.no)
    console.log("req.params.author:",req.params.author)
    //select * from posts where no=req.params.no and author=req.params.author
    res.send("/get3/post/:no&author response")
})

app.get("/get4/post/:no&:author&:title",(req,res)=>{
    console.log("/get4/post/:no&:author&:title")
    console.log("req:",req)
    console.log("req.params:",req.params)
    console.log("req.params.no:",req.params.no)
    console.log("req.params.author:",req.params.author)
    console.log("req.params.title:",req.params.title)
    //select * from posts where no=req.params.no and author=req.params.author
    res.send("/get4/post/:no&author&title response")
})

app.post("/add/post",(req,res)=>{
    console.log("/add/post/")
    console.log("req:",req)
    console.log("req.body:",req.body)
    console.log("req.body.no:",req.body.no)
    console.log("req.body.title:",req.body.title)
    console.log("req.body.author:",req.body.author)
    //inser into post(no,title,author) values(?,?,?);
    res.send("/get4/post/:no&author&title response")
})

app.put("/put/post/:no",(req,res)=>{
    console.log("/put/post/")
    console.log("req.params.no:",req.params.no)
    console.log("req.body.title:",req.body.title)
    console.log("req.body.author:",req.body.author)
    
    res.send("/put/post response")
})

app.patch("/patch/post/:no",(req,res)=>{
    console.log("/put/post/")
    console.log("req.params.no:",req.params.no)
    console.log("req.body.title:",req.body.title)
    
    
    res.send("/put/post response")
})

app.delete("/delete/post/:no",(req,res)=>{
    console.log("/delete/post/")
    console.log("req.params.no:",req.params.no)
    //delete
    res.send("delete response")
})

app.listen(PORT,()=>{
    console.log(`Server On:http://localhost:${PORT}`)
})