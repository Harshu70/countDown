var countDate = new Date("Oct 24, 2024 00:00:00").getTime();
var fn = setInterval(() => {
    var now = new Date().getTime();
    var gap = countDate-now;

    var days = Math.floor(gap/(1000*60*60*24));
    var hours = Math.floor((gap%(1000*60*60*24)/(1000*60*60)));
    var minutes = Math.floor((gap%(1000*60*60)/(1000*60)));
    var seconds = Math.floor((gap%(1000*60)/(1000)));

    document.getElementById("days").innerHTML = days<10 ? "0"+days : days;
    document.getElementById("hours").innerHTML = hours<10 ? "0"+hours : hours;
    document.getElementById("minu").innerHTML = minutes < 10? "0"+minutes : minutes;
    document.getElementById("sec").innerHTML = seconds<10?"0"+seconds : seconds;
}, 1000);

let box = document.querySelectorAll('.box');
box.forEach(card=>{
    card.onmousemove = function(e){
        let x= e.pageX - card.offsetLeft;
        let y = e.pageY - card.offsetTop;

        card.style.setProperty('--x', x-340+'px');
        card.style.setProperty('--y', y-100+'px');
    }
})
