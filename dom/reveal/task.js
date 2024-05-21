const reveals = document.querySelectorAll(".reveal");

const checkVisibility = () => {
    reveals.forEach((reveal)=> {
        let rect = reveal.getBoundingClientRect();
        if(rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
                reveal.classList.add("reveal_active");
            }
        else {
            reveal.classList.remove("reveal_active")
        }
    })
}

window.addEventListener("scroll", checkVisibility);
