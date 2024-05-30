
function writeCookie(name, val) {
    document.cookie = name + '=' + encodeURIComponent(val)
}
 
function readCookie(name) {
    const pairs = document.cookie.split('; ')
    const cookie = pairs.find(p => p.startsWith (name + '='))
    return cookie
}


const openWindow = document.getElementById("subscribe-modal")


if (!readCookie("closedWindow")) {
    openWindow.classList.add("modal_active")
    openWindow.addEventListener("click", () => {
        writeCookie("closedWindow", true)
        openWindow.classList.remove("modal_active")
    })
}

