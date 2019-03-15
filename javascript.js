var icon = document.getElementById('wrappericon');
var nav = document.querySelector('nav');

function icondisplay() {
    if (nav.style.display == "flex") {
        nav.style.display = "none";
    }
    else {
        nav.style.display = "flex";
    }
}
window.onresize = function () {
    if (window.innerWidth > 480) {
        nav.style.display = 'grid';
    }
    else {
        nav.style.display = "none";
    }
};
