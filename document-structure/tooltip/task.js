let hasToolTip = document.querySelectorAll(".has-tooltip")

hasToolTip.forEach((toolTip) => {
    toolTip.addEventListener("click", (event) => {
        if(document.querySelector(".tooltip_active")){
            document.querySelector(".tooltip_active").remove()
            // event.preventDefault()
        } else {
            let rect = toolTip.getBoundingClientRect();
            tipTitle = toolTip.getAttribute("title")
            let newEl = document.createElement("div")
            newEl.innerHTML += `<div class="tooltip tooltip_active" style="left: ${rect.left}px; top: ${rect.top +20}px">${tipTitle}</div>`
            document.body.appendChild(newEl.firstChild)
        }
        event.preventDefault()
    })
})

window.addEventListener("scroll", () => {
    if (document.querySelector(".tooltip_active")) {
        document.querySelector(".tooltip_active").remove()
    }
})