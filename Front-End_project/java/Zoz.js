let zdate=new Date();
zdate.setDate(zdate.getDate()+3); 
let timer=setInterval(updatecount,1000);
function updatecount(){
current=new Date().getTime();
let distance=(zdate-current)/1000;
if(distance<0){
    clearInterval(timer);
    return;
}
let days=Math.floor(distance/(60*60*24));
distance-=days*(60*60*24);
let hours=Math.floor(distance/(60*60));
distance-=hours*(60*60);
let minutes=Math.floor(distance/60);
distance-=minutes*60;
let seconds=Math.floor(distance);
document.getElementById("days").innerHTML=days;
document.getElementById("hours").innerHTML=hours;
document.getElementById("minutes").innerHTML=minutes;
document.getElementById("seconds").innerHTML=seconds;
}


let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) 
})
function myf(){
    var element =document.body;
    element.classList.toggle("dark");
}