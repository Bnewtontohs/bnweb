const mobileNav = document.getElementById("mobileNav");
const navList = mobileNav.classList;

function navigation() {
    mobileNav.classList.add("display");
}

function xButton() {
    mobileNav.classList.remove("display")
}

function zipCode() {
    window.prompt("You better give me Zip Code, else the beatings you'll receive will be tantalizing")
}