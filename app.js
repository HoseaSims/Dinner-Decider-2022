const list = document.querySelector('ul')
const form = document.querySelector('form')
const input = document.querySelector('input')
const button = document.querySelector('button')
const hTwo = document.querySelector('h2')
let foodList = []
let counter = 0
form.addEventListener('submit', (e) =>{
    e.preventDefault()
    foodList.push(input.value)
    list.innerHTML += `<li>${foodList[counter]}</li>`
    counter++
    input.value = ""
})
button.addEventListener('click', () =>{
    finalValue = Math.floor(Math.random() * foodList.length);
    hTwo.innerText = foodList[finalValue]
})