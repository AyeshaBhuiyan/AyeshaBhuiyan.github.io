let styleButton = document.querySelector('#random-style')
function randomStyle(){
    document.body.style.fontFamily = "Garamond"
    document.body.style.fontSize = "20px"
    document.body.style.color = "purple"
}
styleButton.addEventListener("click", randomStyle)