
const express = require('express');

const app = express();

app.get("/api/get", (req,resp)=>{
    resp.send({
        message : "Nodejs AWS Deployment"
    })
})

app.listen(9000,(req,res)=>{
    console.log("server running on port 9000");
})