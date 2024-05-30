const storedText = localStorage.getItem("text")

if(storedText) {
    document.getElementById("editor").textContent = storedText
} 

document.getElementById("editor").addEventListener("input", (e) => {
    localStorage.setItem("text", e.target.value)
})

document.getElementById("button").addEventListener("click", () => {
    document.getElementById("editor").value = ""
    localStorage.removeItem("text")
})