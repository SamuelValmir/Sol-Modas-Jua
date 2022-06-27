window.addEventListener("resize", () => {
    resizeBackground();
});

document.addEventListener("DOMContentLoaded", () => {
    resizeBackground();
});

function resizeBackground() {
    const background = document.querySelector(".background");
    const footer = document.querySelector("footer");

    background.style.height = footer.offsetTop + "px";
};

let dropdown = document.querySelector(".dropdown-toggle");
let dropdownItems = document.querySelectorAll(".dropdown-menu .dropdown-item");

dropdownItems.forEach(dropdownItem => {
    dropdownItem.addEventListener("click", (item) => {
        const dropdownItem = item.target;


        // It deactivates all dropdown items 
        dropdownItems.forEach(dropdownItem => {
            dropdownItem.classList.remove("active");
        });

        dropdownItem.classList.add("active");
        dropdown.innerHTML = dropdownItem.innerHTML;
    })
});

console.log(dropdownItems)