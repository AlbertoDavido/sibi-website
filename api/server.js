const express=require('express');
const path=require('path')
const fs=require('fs/promises')
require('dotenv/config')
const app=express();
const PORT=3500
const filePathCSS=path.join(__dirname, "..", "css")
const filePathJS=path.join(__dirname, "..", "js")
const filePathImages=path.join(__dirname, "..", "images")

let redirect=null;

const{accessToken, getAccessToken}=require('./getAccessToken');

const{getIPN, getID}=require('./getIPN');
const test=Math.random();
const idNumber=Math.floor(test*1000000)+1;


let amount;
app.use(express.urlencoded({extended: true}))
app.use(express.static(filePathCSS))
app.use(express.static(filePathJS))
app.use(express.static(filePathImages))
app.get("/booking", (req,res)=>{

  res.sendFile(path.join(__dirname,  "booking.html"));

  
})
async function postData() {
app.post('/booking', (req,res)=>{
    
       
    
    const {fullname, phonenumber,email,selectitem}=req.body;

    

    async function submitOrderRequest(){
    const callbackurl=process.env.IPN_PAYMENTCALLBACK_URL;

    const submitOrderURL=process.env.IPN_SUBMITORDER_URL;
    
     
      await getIPN();
    await getAccessToken();
    
const userID=getID();

    const token=accessToken();
    
    switch(selectitem){
      case 'homecare':
         amount=500;
         break;
      case 'palliative':
         amount=400;
         break;
      default:
         amount=0
    }
    const body=JSON.stringify({
    id : idNumber,
    currency: "KES",
    amount: amount,
    description: "Homecare Service",
    callback_url: callbackurl,
    notification_id: userID,
    billing_address:{
        phone_number: phonenumber.replace("+254", "0"),
        email_address: email,
        first_name: fullname
    }


})
console.log(body);
try {
    
    

    const response=await fetch(submitOrderURL, {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-type" : "application/json",
            "Accept" : "application/json"
        },

        body
    })
    if(!response.ok){
        throw new Error(`Error: ${request.status} ${request.statusText}`)
    }

    const data=await response.json();
console.log(data)
    redirect=await data.redirect_url;

    console.log(redirect)

    res.redirect(redirect)

    console.log();

    // exec(`start ${data.redirect_url}`);
} 

catch (error) {
   console.error(error); 
}
}

submitOrderRequest();



})}

postData();
app.listen(PORT, ()=>console.log(`Listening on port http://localhost:${PORT}`));

