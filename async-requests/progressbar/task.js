document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData();
    const fileInput = document.getElementById("file");

    formData.append("file", fileInput.files);

    const xhr = new XMLHttpRequest();

    xhr.upload.addEventListener("progress", (e) => {
        if(e.lengthComputable) {
            const progress = Math.round((e.loaded/e.total) *100);
            document.getElementById("progress").value = progress;
        
        }
    });

    xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/upload", true)
    xhr.send(formData)
})