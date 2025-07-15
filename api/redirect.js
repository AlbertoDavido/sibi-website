const express=require('express');

const app=express();

app.get('/payment', (req,res)=>{
    res.send("Processing Payment please be patient");
})

PORT=80;

app.listen(PORT, ()=>console.log(`Listening on http://localhost:${PORT}`));