
const MenuList = document.querySelector(".menu-list");
const Close = document.querySelector(".close");
const Arrow = document.querySelector(".arrow");
const Products = document.querySelector(".products");
const challenges = document.querySelector(".challenges");
const resources = document.querySelector(".resources");
const Others = document.querySelector(".others");
const Description = document.querySelector(".description");
const Closed = document.querySelector(".closed");



Arrow.addEventListener("click", () =>{
    MenuList.style.display = "block";
    Close.style.display = "block";
    Arrow.style.display = "none";

});

Close.addEventListener("click", () =>{
    MenuList.style.display = "none";
    Close.style.display = "none";
    Arrow.style.display = "block";
    Description.style.display = "none";

});

Products.addEventListener("click", () =>{
    Description.style.display = "block";
});

Closed.addEventListener("click", () =>{
    Arrow.style.display = "none";
    Description.style.display = "none";
})