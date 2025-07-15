import express from 'express';

const app=express();

app.get('/', (req,res)=>{
res.send("<h1>Hi NGROK</h1>")
})

const PORT=80

app.listen(PORT, ()=>console.log(`Listening on port ${PORT}`) );