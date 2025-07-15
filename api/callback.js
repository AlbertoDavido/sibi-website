const express= require('express');
const path=require('path');
const fs=require('fs/promises');
const app=express();
app.use(express.urlencoded({ extended: true }));

app.use(express.json())
const PORT=80;
app.get('/callback', (req,res)=>{
    res.send("Running on port " + PORT)
} )
app.post('/callback', async(req,res)=>{

    const data=JSON.stringify(`${req.body}\n`);

   await fs.appendFile(path.join(__dirname, "logs", "logs.txt"), data);

   res.send("Successful")

})



app.listen(PORT, ()=>console.log(`Listening on port: ${PORT}`))