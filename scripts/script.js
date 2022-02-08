const slider=document.getElementById("slider");
let sliderS = document.querySelectorAll(".sliderS");
let sliderSLast = sliderS[sliderS.length -1];

const btnR = document.querySelector("#btnR");
const btnL = document.querySelector("#btnL");

slider.insertAdjacentElement('afterbegin',sliderSLast)

function moveR(){
    let sliderSFirst = document.querySelectorAll(".sliderS")[0];
    slider.style.marginLeft="-200%";
    slider.style.transition="all 0.5s";
    setTimeout(function(){
        slider.style.transition="none";
        slider.insertAdjacentElement('beforeend',sliderSFirst);
        slider.style.marginLeft="-100%";
    }, 500);
}
function moveL(){
    let sliderS = document.querySelectorAll(".sliderS");
    let sliderSLast = sliderS[sliderS.length -1];
    slider.style.marginLeft="0";
    slider.style.transition="all 0.5s";
    setTimeout(function(){
        slider.style.transition="none";
        slider.insertAdjacentElement('afterbegin',sliderSLast);
        slider.style.marginLeft="-100%";
    }, 500);
}
btnR.addEventListener('click',function(){
    moveR();
});
btnL.addEventListener('click',function(){
    moveL();
});

setInterval(function(){
    moveR();
}, 5000);

