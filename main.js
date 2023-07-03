var _ = require('lodash');

let array = [1,2,3,4,5,6,7,8]
console.log('answer', _.without(array, 3))



let css = document.getElementById("text")
let color1 = document.querySelector(".color1")
let color2 = document.querySelector(".color2")
let color3 = document.querySelector(".color3")
let body = document.getElementById("gradient")
let primarytext = document.getElementById("thistext")

function setGradient(){
    body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value}, ${color3.value})`
    css.textContent = `linear-gradient(to right, ${color1.value}, ${color2.value}, ${color3.value})`
    primarytext.style.display = 'none'

}

color1.addEventListener("input", setGradient)

color2.addEventListener("input", setGradient)

color3.addEventListener("input", setGradient)


