const searchForm = document.querySelector(".search-form");
const searchBtn = document.querySelector("#search-btn");
const cartItem = document.querySelector(".card-items-container");
const cartBtn = document.querySelector("#cart-btn");
const navBar = document.querySelector(".navbar");
const menuBtn = document.querySelector("#menu-btn");



searchBtn.addEventListener("click", function () {
    searchForm.classList.toggle("active");
    document.addEventListener("click", function (e) {
        if (
            !e.composedPath().includes(searchBtn) &&
            !e.composedPath().includes(searchForm)
        ) {
            searchForm.classList.remove("active");
        }
    })
});

cartBtn.addEventListener("click", function () {
    cartItem.classList.toggle("active");
    document.addEventListener("click", function (e) {
        if (
            !e.composedPath().includes(cartBtn) &&
            !e.composedPath().includes(cartItem)
        ) {
            cartItem.classList.remove("active");
        }
    })
});

menuBtn.addEventListener("click", function () {
    navBar.classList.toggle("active");
    document.addEventListener("click", function (e) {
        if (
            !e.composedPath().includes(menuBtn) &&
            !e.composedPath().includes(navBar)
        ) {
            navBar.classList.remove("active");
        }
    })
});


function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Daha Fazla";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Daha Az";
        moreText.style.display = "inline";
    }
}

