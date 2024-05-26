let pollTitle = document.getElementById("poll__title")
let pollAnswers = document.getElementById("poll__answers")
fetch("https://students.netoservices.ru/nestjs-backend/poll")
.then(response => {
    return response.json()
})
.then(data => {
    let variants = data.data
    let question = variants.title
    let answers = variants.answers
    console.log(question, answers)
    pollTitle.textContent = question
    for(let answer of answers) {
        console.log(answer)
        pollAnswers.innerHTML += `
        <button class="poll__answer">
            ${answer}
        </button>
        `

    }
})
.finally(() => {
    pollAnswers.addEventListener("click", (event) => {
        if(event.target.classList.contains("poll__answer")){
            alert("Спасибо, ваш голос засчитан!")
        }
    })
})