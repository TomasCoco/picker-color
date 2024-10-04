const inputColor = document.querySelector('#inputColor')
const btnVisualizar = document.getElementById('btn-visualizar')
const parrafoExa = document.getElementById('parrafoExa')
const cardColor = document.querySelector('#cardColor')

//console.log(inputColor.value)
//console.log(cardColor)

btnVisualizar.addEventListener("click", () =>{
    console.log(inputColor.value)
    parrafoExa.textContent = inputColor.value //trae el valor del input al parrafo
    cardColor.style.backgroundColor = inputColor.value
})