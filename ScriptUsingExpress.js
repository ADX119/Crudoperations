const express = require (express);

const app = express();


app.post("/post",(req,res)=>{ //To write/create something 
    const body =  req.body;
    res.send(body);
})

app.get("/:id",(req,res)=>{ //To get a specific Data from a Dataset
    const post = req.params.id;
    res.send(post);
})

app.get("/id",(req,res)=>{ //To get all the data from a Dataset
    const users = req.query.id;
    res.send(users);
})

app.put("/user/id",(req,res)=>{ //To update Data
    const username = req.body.username;
    const password = req.body.password;
    const userId = req.params.id;
 
    if(userId){
        res.json({
            username : username,
            password : password
        });
    }
    res.send("User succefully Updated");
})

app.delete("/user/id",(req,res)=>{ //To delete Data

    const userId = req.params.id;

    if (userId){
        res.delete(userId);
    }
})


app.listen(3000,()=>{
    console.log("server is running at port 3000")
})