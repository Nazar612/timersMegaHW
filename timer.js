const utils = {
    days: document.querySelector("#days"),
    hours: document.querySelector("#hours"),
    minuts: document.querySelector("#minutes"),
    seconds: document.querySelector("#seconds")
};

let thisDate = new Date();
const futurDate = new Date("2027-09-19T19:00:00");
const timeTo = futurDate - thisDate;

function timerToActivity(mmm) {
    const inSeconds = mmm / 1000;
    
    const days = Math.floor(inSeconds / 86400);
    const restFromDays = Math.floor(inSeconds % 86400);
    const hours = Math.floor(restFromDays / 3600);
    const restFromHours = Math.floor(inSeconds % 3600);
    const minutes = Math.floor(restFromHours / 60);
    const seconds = Math.floor(restFromDays % 60);

    utils.days.textContent = days;
    utils.hours.textContent = hours;
    utils.minuts.textContent = minutes;
    utils.seconds.textContent = seconds;
};

const counterToDate = setInterval(()=> {
    const thisDate = new Date();
    const timeTo = futurDate - thisDate;
    timerToActivity(timeTo)
}, 1000)
