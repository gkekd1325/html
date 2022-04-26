window.addEventListener("load", ani);
window.addEventListener("scroll", image);

function ani(){
    $(".text").addClass("on");
}

var know = document.querySelector("#knowledge");
var check = document.querySelector("#check");

function image(){
    console.log(scrollY);
    if(scrollY>250){
        know.style.transform="translateX(0)";
    }
    else{
        know.style.transform="translateX(-100%)";
    }
    if(scrollY>400){
        check.style.transform="translateX(0)";
    }
    else{
        check.style.transform="translateX(-100%)";
    }
}