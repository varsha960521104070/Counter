const counter = document.querySelector('.counter');
const incr = document.querySelector('.incr');
const degr = document.querySelector('.degr');


var count = 0;
incr.addEventListener("click",()=>{
    count++;
    counter.innerHTML =count;
});
degr.addEventListener("click",()=>{
    count--;
    counter.innerHTML =count;
});