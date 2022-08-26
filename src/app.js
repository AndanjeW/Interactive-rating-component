let content = document.querySelector(".content")

let ratingContainer = document.querySelector(".content-rating")

let submitButton = document.getElementById("submit")

let rateButton = document.getElementById("rate-again")
let rating = document.getElementById("rating")
let rates = document.querySelectorAll(".btn-rating")

submitButton.addEventListener("click", ()=>{
  ratingContainer.classList.remove("hidden")
  content.style.display="none"
})
rateButton.addEventListener("click", ()=>{
  ratingContainer.classList.add("hidden")
  content.style.display="block"
})

rates.forEach((rate)=>{
  rate.addEventListener("click", ()=>{
rating.innerHTML =rate.innerHTML  })
})