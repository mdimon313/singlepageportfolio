// ! =================> TOGGLE MENU
let showBtn = document.querySelector(".showIcon");
let menu = document.querySelector(".nav-list");
let closeBtn = document.querySelector(".closeIcon");

showBtn.addEventListener("click", show);

function show() {
    menu.style.left = "0 ";
    showBtn.style.display = "none";
    menu.style.visibility = "visible";
}

closeBtn.addEventListener("click", close);

function close() {
    menu.style.left = "-100% ";
    showBtn.style.display = "block";
    menu.style.visibility = "hidden";
}

//  ! =================> SCROLL
window.addEventListener("scroll", ()=> {
    let header = document.querySelector("#header");
    let positionFixed = window.pageYOffset;
    if (100 < positionFixed) {
        header.classList.add("fixed");
    }
    if (0 >= positionFixed) {
        header.classList.remove("fixed");
    }
})
