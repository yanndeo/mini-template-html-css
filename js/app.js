$(document).ready(function () {
    let menuBurgerElt = document.getElementsByClassName('menu-burger')[0];
    let headerElt = document.getElementsByClassName('header')[0];

    console.log(headerElt)

    menuBurgerElt.addEventListener('click',(e) => {

        headerElt.classList.toggle('header-mobile');
        menuBurgerElt.style.transitionTimingFunction = "ease, step-start, cubic-bezier(0.1, 0.7, 1.0, 0.1)";
        menuBurgerElt.style.transitionDuration = "8s";
    });

});