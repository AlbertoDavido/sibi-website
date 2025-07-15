require( 'dotenv/config');
const fetch=global.fetch;
let token=null;

async function getAccessToken(){
const consumerKey=process.env.PESAPAL_CONSUMER_KEY;
const consumerSecret=process.env.PESAPAL_CONSUMER_SECRET;
const url=process.env.PESAPAL_API_URL;



const body=JSON.stringify({
    consumer_key: consumerKey,
    consumer_secret: consumerSecret
})

try{
const response=await fetch(url, {
    method: 'POST',

    headers: {
        'Content-type': 'application/json',
        'Accept' : 'application/json'
    },

    body,
});

if(!response.ok){
    throw new Error(`Error: ${response.status}: ${response.statusText}`)
}
const data=await response.json();


console.log(`Access Token: ${data.token}\n`);
console.log(`Expires in: ${data.expiryDate}`);

token=data;

}
catch(err){
    console.error(err);
}}
const accessToken=()=>token.token
getAccessToken();

module.exports={accessToken,getAccessToken}