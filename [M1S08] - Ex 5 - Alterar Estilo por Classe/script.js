
document.addEventListener("click",function() {
    let elementoBotao = document.querySelector('.container')

    if (elementoBotao.style.color === 'red') {
        elementoBotao.style.color = 'yellow'
    } else {
        elementoBotao.style.color = 'red'
    }  
    
})