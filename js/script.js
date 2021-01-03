// ! =================> TOGGLE MENU
let showBtn = document.querySelector(".showIcon");
let menu = document.querySelector(".nav-list");
let closeBtn = document.querySelector(".closeIcon");

showBtn.addEventListener("click", show);

function show() {
    menu.style.left = "0 ";
    showBtn.style.zIndex = "-1";
    menu.style.visibility = "visible";
}

closeBtn.addEventListener("click", close);

function close() {
    menu.style.left = "-100% ";
    menu.style.visibility = "hidden";
}

//  ! =================> SCROLL
window.addEventListener("scroll", ()=> {
    let header = document.querySelector("#header");
    let positionFixed = window.pageYOffset;
    let listLink = document.querySelectorAll("li #link");
    if (100 < positionFixed) {
        header.classList.add("fixed");
    }
    if (0 >= positionFixed) {
        header.classList.remove("fixed");
    }
})

// ! HIDE MENU WHEN CLICK ANY LINK
//  let listLink = document.querySelectorAll("li #link");
function hide_menu() {
    menu.style.left = "-100%";
}

