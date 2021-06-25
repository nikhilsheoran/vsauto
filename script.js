document.addEventListener('scroll',()=>{
    if (scrollY >=100) {
        document.getElementById("header").style.clipPath = "polygon(0 0, 12% 0, 12% 100%, 0 100%)";
    }
    else {
        document.getElementById("header").style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0 100%)";
    }
})