const modal = document.querySelector(".header__modal");
const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".header__close-btn");
const logInbtn = document.querySelector(".header__enter-btn");
const userInput = document.querySelector(".user");
logInbtn.addEventListener("click", (e) => {
    const name = userInput.value
    Loc
})

openBtn.addEventListener("click", () => {
modal.classList.add("active");
console.log(document.querySelector(".modal"));
});
closeBtn.addEventListener("click", () => {
    modal.classList.remove("active");
})