let hasToolTip = document.querySelectorAll(".has-tooltip")

hasToolTip.forEach((toolTip) => {
    toolTip.addEventListener("click", (event) => {
        if(toolTip.querySelector(".tooltip_active")){
            toolTip.querySelector(".tooltip_active").remove()
        } else {
            let rect = toolTip.getBoundingClientRect();
            tipTitle = toolTip.getAttribute("title")
            toolTip.innerHTML += `<div class="tooltip tooltip_active" style="left: ${rect.left}px; top: ${rect.top +20}px">${tipTitle}</div>`
        }
        event.preventDefault()
    })
})

window.addEventListener("scroll", () => {
    if (document.querySelector(".tooltip_active")) {
        document.querySelector(".tooltip_active").remove()
    }
})