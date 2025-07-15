require ('dotenv/config');
const open=require('open');

const{postData,formService,formName,formEmail,formPhone}=require('./server');

const{ exec }=require('child_process')
// const{getRegisteredIPN, getID}=require('./getRegIPN');
const{getIPN, getID}=require('./getIPN');

const{accessToken, getAccessToken}=require('./getAccessToken');
const test=Math.random();
const idNumber=Math.floor(test*1000000)+1;



async function submitOrderRequest(){
    const callbackurl=process.env.IPN_PAYMENTCALLBACK_URL;

    const submitOrderURL=process.env.IPN_SUBMITORDER_URL;
    await getIPN();
    await getAccessToken();
     
     await postData();
     
     
    const phone=formPhone();

    const email=formEmail();
    const name=formName();

    const service=formService();

    const userID=getID();

    const token=accessToken();

    

    const body=JSON.stringify({
    id : idNumber,
    currency: "KES",
    amount: 100,
    description: "Homecare Service",
    callback_url: callbackurl,
    notification_id: userID,
    billing_address:{
        phone_number: phone,
        email_address: email,
        first_name: name
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
    if(!response){
        throw new Error(`Error: ${request.status} ${request.statusText}`)
    }

    const data=await response.json();

    console.log(data.redirect_url)

    console.log(await open(data.redirect_url));

    // exec(`start ${data.redirect_url}`);
} 

catch (error) {
   console.error(error); 
}
}

submitOrderRequest();