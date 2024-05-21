
let book = document.getElementById("book");

let fontSizes = document.querySelector(".book__control_font-size")
if(fontSizes) {
    fontSizes.addEventListener("click", (event) => {
        event.preventDefault();
        let font = event.target;
    
        if(!font.classList.contains("font-size")) return;
    
        document.querySelector(".font-size_active").classList.remove("font-size_active")
        font.classList.add("font-size_active")
    
        book.classList.remove("book_fs-small", "book_fs-big")
    
        let fontSize = font.dataset.size
    
        if(fontSize){
            book.classList.add("book_fs-" + fontSize)
        }
    
    });
}

let fontColors = document.querySelector(".book__control_color")
if (fontColors) {
    fontColors.addEventListener("click", (event) => {
        event.preventDefault();
        let color = event.target;
    
        if(!color.classList.contains("color")) return;
    
        document.querySelector(".book__control_color .color_active").classList.remove("color_active")
        color.classList.add("color_active")
    
        book.classList.remove("book_color-gray", "book_color-whitesmoke", "book_color-black")
    
        let fontColor = color.dataset.textColor;
    
        if(fontColor){
            book.classList.add("book_color-" + fontColor)
        }
    
    });    
}


let backGround = document.querySelector(".book__control_background")
if (backGround) {
    backGround.addEventListener("click", (event) => {
        event.preventDefault();
        let back = event.target;
    
        if(!back.classList.contains("color")) return;
    
        document.querySelector(".book__control_background .color_active").classList.remove("color_active")
        back.classList.add("color_active")
    
        book.classList.remove("book_bg-gray", "book_bg-black", "book_bg-white")
    
        let fontBg = back.dataset.bgColor
    
        if(fontBg){
            book.classList.add("book_bg-" + fontBg)
        }
    
    } )
}
