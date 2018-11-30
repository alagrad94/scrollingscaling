const audrey = document.getElementById("audrey");

window.addEventListener("scroll", function() {adjustScroll2 (audrey)});
    /*
        Adjust the width of audrey to be 1/3 the value of
        `window.scrollY`. No lower than 50px, though.
    */
   function adjustScroll (element) {
    
    if (window.scrollY <= 50) {
        audrey.style.width = 50;
    } else {
        audrey.style.width = (window.scrollY)/3 + "px";
    }
    console.log(audrey.style.width);
    };

    /*
        Adjust the height of audrey to be 1/4 the value of
        `window.scrollY`. No lower than 100px, though.
    */
    function adjustScroll2 (element) {
    
    if (window.scrollY <= 100) {
        audrey.style.width = 100;
    } else {
        audrey.style.width = (window.scrollY)/4 + "px";
    }
    console.log(audrey.style.width);
    };

