// selectors
const goToAfrika="11 september 2022";// date to reach
const secsElement=document.getElementById("secs");
const minutesElement=document.getElementById('minutes');
const hoursElement = document.getElementById('hours');
const daysElement =document.getElementById('days');

// creating a function to add a 0 in front of every number <10
function toDecimal(element){
    if ((element)<10){
        return "0"+element;
    }
    else{
        return element;
    }
}
// creating a mechanisme for the countdown.

function countdown(){
    const dateToReach= new Date(goToAfrika);
    console.log(dateToReach);
    const currentDate=new Date();
    const timeRemaining=(dateToReach-currentDate)/1000;
    const days=Math.floor(timeRemaining/86400);
    const hours=Math.floor(timeRemaining/3600)%24;
    const minutes=Math.floor(timeRemaining/60)%60;
    const secs=Math.floor(timeRemaining)%60;
    console.log(days,hours,minutes,secs)
    
    daysElement.innerHTML= toDecimal(days);
    hoursElement.innerHTML=toDecimal(hours);
    minutesElement.innerHTML=toDecimal(minutes);
    secsElement.innerHTML=toDecimal(secs);
}

setInterval(countdown,1000);

