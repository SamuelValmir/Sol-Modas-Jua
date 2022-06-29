window.addEventListener("resize", () => {
    resizeBackground();
    resizeTextArea();
});

document.addEventListener("DOMContentLoaded", () => {
    resizeBackground();
});

function resizeBackground() {
    const background = document.querySelector(".background");
    const footer = document.querySelector("footer");

    background.style.height = footer.offsetTop + "px";
};


function resizeTextArea (){
    const nameInput = document.querySelector("#name");
    document.querySelector("#comment").style.width = nameInput.clientWidth +"px"
    
};

let dropdownMenuList = document.querySelectorAll(".dropdown-menu");
// let dropdownItems = document.querySelectorAll(".dropdown-menu .dropdown-item");

// It changes dropdown text when dropdown item is clicked
dropdownMenuList.forEach(dropdownMenu => {

    dropdownMenu.childNodes.forEach(dropdownItem => {
        let dropdownMenuAriaLabelledBy = dropdownItem.parentElement.getAttribute("aria-labelledby");
        let label = document.querySelector(`label[for=${dropdownMenuAriaLabelledBy}]`);

        dropdownItem.addEventListener("click", () => {
            if (dropdownItem.classList.contains("dropdown-item")) {

                [...dropdownMenu.children].forEach(dropdownItem => {
                    dropdownItem.classList.remove("active");
                });
  
                dropdownItem.classList.add("active");
                label.innerText = dropdownItem.innerHTML;
            }
        })
    })

});

// It centralizes all dropdown menu
document.querySelectorAll('.dropdown-toggle').forEach(dropdownToggle => {
    new bootstrap.Dropdown(dropdownToggle, {
        popperConfig: function () {
            return { placement: 'bottom' }
        }
    });
});

resizeTextArea();