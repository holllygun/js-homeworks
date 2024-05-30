const form = document.getElementById("signin__form");
const spanUserId = document.getElementById("user_id");
const welcome = document.getElementById("welcome");
const signin = document.getElementById("signin")


const logoutButton = document.createElement("button");
logoutButton.textContent = "Выйти";
logoutButton.classList.add("Logout");
welcome.appendChild(logoutButton);

const storedUserId = localStorage.getItem("userId");

if(storedUserId) {
    signin.classList.remove("signin_active");
    spanUserId.textContent = storedUserId;
    welcome.classList.add("welcome_active");
}

form.addEventListener("submit", (e) => {
    e.preventDefault()
    let formData = new FormData(form)
    let response = fetch('https://students.netoservices.ru/nestjs-backend/auth', {
        method: 'POST',
        body: formData
    })
    .then (response => response.json())
    .then (data => {
        if(data.success) {
            localStorage.setItem("userId", data.user_id);
            signin.classList.remove("signin_active");
            spanUserId.textContent = localStorage.getItem("userId")
            welcome.classList.add("welcome_active");
        }

        else {
            alert("Неверный логин/пароль")
        }

        form.reset()
    })
    .catch(error => {
        alert("Произошла ошибка при попытке ввода данных")
        form.reset()
    })

})


logoutButton.addEventListener("click", () => {
    localStorage.removeItem("userId");
    signin.classList.add("signin_active");
    welcome.classList.remove("welcome_active");
})
