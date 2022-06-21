window.addEventListener("resize", ()=>{
    resizeBackground();
});

document.addEventListener("DOMContentLoaded", ()=>{
    resizeBackground();
});

function resizeBackground(){
    const background = document.querySelector(".background");
    background.style.height = document.documentElement.scrollHeight + "px";
};