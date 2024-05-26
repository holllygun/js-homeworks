
let gifLoader = document.getElementById("loader")
let items = document.getElementById("items")

fetch("https://students.netoservices.ru/nestjs-backend/slow-get-courses").then(response => {
    return response.json()
})
.then(data => {
    const courses = data.response.Valute;
    for(const currency of Object.values(courses)) {
        let itemCode = currency.CharCode;
        let itemValue = currency.Value;
        let newItem = document.createElement("div")
        newItem.classList.add("item")
        newItem.innerHTML += `
        <div class="item__code">
            ${itemCode}
        </div>
        <div class="item__value">
            ${itemValue}
        </div>
        <div class="item__currency">
            руб.
        </div>`
        items.appendChild(newItem)
    }
})
.finally(() => {
    gifLoader.classList.remove("loader_active")
})

