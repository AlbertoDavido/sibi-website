require('dotenv/config');
const{accessToken, getAccessToken}=require('./getAccessToken');
let id=null;
const registeredIPN=process.env.IPN_GETLIST_URL
async function getRegisteredIPN() {
    await getAccessToken();

    const token=accessToken();


    const response= await fetch(registeredIPN, {
        method: "GET",

        headers: {
            "Authorization": `Bearer ${token}`
        }
    })

if(!response){
    throw new Error(`Error : ${response.status} ${response.statusText}`)
}
 const data= await response.json();
 const id=data
 console.log(data.ipn_id);
}
const getID=()=>id.ipn_id;

getRegisteredIPN();

module.exports={getRegisteredIPN,getID}