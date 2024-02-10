const header = document.querySelector('.header');
const footer = document.querySelector('.footer');


function choiceDark() {
    console.log("Dark");
    header.style.background = "rgb(0, 40, 55)"
    footer.style.background = "rgb(0, 40, 55)"
}

function choiceLight() {
    console.log("Light");
    header.style.background = "skyblue"
    footer.style.background = "skyblue"
}
