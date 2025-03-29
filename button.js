document.addEventListener('DOMContentLoaded', function() {
    var mybutton = document.getElementById("scrollToTopBtn");

    window.onscroll = function() {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            mybutton.classList.add("show"); 
        } else {
            mybutton.classList.remove("show"); 
        }
    };

    mybutton.onclick = function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
});