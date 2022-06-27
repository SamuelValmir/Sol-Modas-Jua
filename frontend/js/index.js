window.addEventListener("resize", ()=>{
    resizeBackground();
});

document.addEventListener("DOMContentLoaded", ()=>{
    resizeBackground();
});

function resizeBackground(){
    const background = document.querySelector(".background");
    const footer = document.querySelector("footer");

    background.style.height = footer.offsetTop + "px";
};