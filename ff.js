const input = document.querySelector("#input")
const btn = document.querySelector("#btn")
const result = document.querySelector("#result")
const total = document.querySelector("#total")
let i = 0

btn.addEventListener('click', (v) => {
    //result.innerHTML += `<li>${input.value}$</li>`
    if(input.value === "") return
    createDeletesElement(input.value)
});

function createDeletesElement(value) {
    i++
    const Li = document.createElement('li')
    const btn = document.createElement('button')

    Li.className = 'li'
    Li.textContent = value 
    //создает тудушки 
    btn.className = 'btn'
    btn.textContent = 'delete'
    Li.appendChild(btn)
    //удаляет тудушки 
    btn.addEventListener('click', (e) => {
        result.removeChild(Li);
        i--
        total.textContent = i 
    })
    //включает тудушки 
    Li.addEventListener('click', (e) => {
        Li.classList.toggle('red')
    })
    total.textContent = i
    result.appendChild(Li)
    
}