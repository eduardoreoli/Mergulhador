var banner = document.querySelector(".banner");
var mergulhador = document.querySelector(".mergulhador img");

window.addEventListener("scroll", function () {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    var mergulhadorPosition = scrollTop / 9;
    var mergulhadorScale = 1 - scrollTop / (banner.offsetHeight / 0.5);
    var mergulhadorTop =
        scrollTop / 2; /* define a posição vertical do mergulhador */

    mergulhador.style.bottom = mergulhadorPosition + "px";
    mergulhador.style.transform = "scale(" + mergulhadorScale + ")";
    mergulhador.style.top = mergulhadorTop + "px";
});

