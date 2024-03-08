
document.addEventListener("click",function() {
    let textoH2 = document.querySelector('.mudarTexto')
    if (textoH2.textContent ==='CURSO DE DESENVOLVIMENTO WEB DO LAB365, EM PARCERIA COM O SENAI E PREFEITURA') {
        textoH2.textContent = 'O MELHOR DA GRANDE FLORIANOPOLIS'
    } else {
        textoH2.textContent = 'CURSO DE DESENVOLVIMENTO WEB DO LAB365, EM PARCERIA COM O SENAI E PREFEITURA'
    }  
    
})