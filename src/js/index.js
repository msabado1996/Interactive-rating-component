const mainContainer = document.querySelector(".main-container");
const thanksContainer = document.querySelector(".thanks-container");
const submitBtn = document.getElementById("submit-btn");
const backBtn = document.getElementById("back-btn");
const rates = document.querySelectorAll(".rate-btn");
const rateText = document.querySelector(".rate-text");

submitBtn.addEventListener("click", () =>{
    thanksContainer.classList.remove("hidden")
    mainContainer.style.display = "none"
})

backBtn.addEventListener("click", () =>{
    thanksContainer.classList.add("hidden")
    mainContainer.style.display = "block"
})

rates.forEach((rate) => {
    rate.addEventListener("click" , () => {
        rateText.innerHTML = rate.innerHTML
    })
})