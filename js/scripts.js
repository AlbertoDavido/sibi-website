const displayValue=document.querySelectorAll(".num");
let hasAnimated=false;

let interval=5000;

displayValue.forEach(value => {
    let startValue=0;
    let endValue=parseInt(value.getAttribute("data-val"));

    let duration=Math.floor(interval/endValue);
    let counter=setInterval(function(){
        startValue+=1;
        value.textContent=startValue + "+";
        if(startValue==endValue){
            clearInterval(counter);
        }
    }, duration);
});
const scroll=document.getElementById("partner-scroll");























