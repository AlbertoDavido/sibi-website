<?php

if ($_SERVER["REQUEST_METHOD"]== "POST"){
    $Fname=htmlspecialchars($_POST["FirstName"]);
    $Lname=htmlspecialchars($_POST["LastName"]);
    $Email=htmlspecialchars($_POST["email"]);
    $Phone=htmlspecialchars($_POST["Phone"]);
    $Message=htmlspecialchars($_POST["Message"]);
    $to="executive@sibicare";
    $subject="New Message from $Fname " ;
    $body="Name: $Fname\n Email: $Email\n Message\n $Message";
    $header="From $Email";

if(mail($to,$subject,$body,$header)){
    echo "Message sent successfully";
}
else{
    echo 'Failed to send Email';
}


}
else{
    echo "Invalid Request";}









