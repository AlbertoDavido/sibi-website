require('dotenv/config')
const {accessToken, getAccessToken}=require('./getAccessToken')
const fetch=global.fetch;
let id=null;
const registerURL=process.env.IPN_REGISTER_URL
const callbackURL=process.env.IPN_CALLBACK_URL


const body={
    "url" : callbackURL,
    "ipn_notification_type": "GET"
}
async function getIPN(){
    await getAccessToken();

    const tokenData=accessToken();
try{
const response =  await fetch(registerURL, {
    method : "POST",

    headers: {
        "Authorization" : `Bearer ${tokenData}`,
        "Content-type": "application/json",
        "Accept" : "application/json"
    },
body: JSON.stringify(body)


})

 if(!response.ok){
   throw new Error(`Error: ${response.status}: ${response.statusText}`)
    
  
}
  const data= await response.json();

 console.log(data) 
id=data;
  
} 
catch(err){
    console.error(err);
}}
const getID=()=>id.ipn_id;
getIPN();

module.exports={getIPN,getID}
