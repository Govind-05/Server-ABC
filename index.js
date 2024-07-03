const express=require('express')

const app=express();

const PORT=8000

app.get("/",(req,res)=>{
    res.send("SERVER ABC IS RUNNING")
})

app.listen(PORT, ()=>{
    console.log(`Server is listening on port ${PORT}`);
})