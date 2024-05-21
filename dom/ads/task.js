let rotators = document.querySelectorAll(".rotator")

let setter = setInterval(() => {
    rotators.forEach(rotator => {
        let rotatorCases = rotator.querySelectorAll(".rotator__case");
        let activeCase = rotator.querySelector(".rotator__case_active");
        activeCase.classList.remove("rotator__case_active")
        let activeIndex = Array.from(rotatorCases).indexOf(activeCase);
        let nextIndex = (activeIndex+1) % rotatorCases.length;
        rotatorCases[nextIndex].classList.add("rotator__case_active");
})
}, 1000)
