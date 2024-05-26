let products = document.querySelectorAll('.product');
let cartProducts = document.querySelector('.cart__products');
let cart = document.querySelector(".cart");
let clearCart = document.querySelector(".clear__cart")

function isVisible() {
    if(cartProducts.children.length === 0) {
        cart.classList.add("non-cart")
    } else {
        cart.classList.remove("non-cart")
    }
}


products.forEach((product) => {
    let count = 1
    let btnDecr = product.querySelector(".product__quantity-control_dec")
    let btnIncr = product.querySelector(".product__quantity-control_inc")
    let img = product.querySelector("img")
    let imgLink = img.src;
    let productId = product.getAttribute("data-id")
    let productQuantity = product.querySelector(".product__quantity-value")

    btnDecr.addEventListener("click", () => {
        count --;
        if(count <1 ) count = 1;
        productQuantity.textContent = count
    })

    btnIncr.addEventListener("click", () => {
        count++;
        productQuantity.textContent = count
    })

    let addProduct = product.querySelector(".product__add")
    let removeProduct = product.querySelector(".product__remove")

    addProduct.addEventListener("click", () => {

        let existingProduct = cartProducts.querySelector(`.cart__product[data-id="${productId}"]`)
        if(existingProduct){
            let existingCount = existingProduct.querySelector(".cart__product-count")
            let countInt = parseInt(existingCount.textContent)
            existingCount.textContent = countInt + count
        } else {
            cartProducts.innerHTML += `
            <div class="cart__product" data-id="${productId}"> 
                <img class="cart__product-image" src="${imgLink}"> 
                <div class="cart__product-count">${count}</div>
            </div>`;
        }
        isVisible();
    })

    removeProduct.addEventListener("click", () => {
        let existingProduct = cartProducts.querySelector(`.cart__product[data-id="${productId}"]`)
        if(existingProduct){
            let existingCount = existingProduct.querySelector(".cart__product-count")
            let countInt = parseInt(existingCount.textContent)
            let newCount = countInt - count;
            if (newCount > 0) {
                existingCount.textContent = newCount;
            }
            else {
                existingProduct.remove();
            }
            isVisible();
        } ;
    })
} )

clearCart.addEventListener("click", () =>{
    while (cartProducts.firstChild) {
        cartProducts.firstChild.remove();
    }
    isVisible() 
})