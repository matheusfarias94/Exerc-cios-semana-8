let novoElementoDiv = document.createElement('h3');
novoElementoDiv.textContent = 'Novo titulo h3';
// console.log(novoElementoDiv)

let conteudo = document.createTextNode("Novo titulo H3")
//  console.log(conteudo)


let container = document.querySelector('.container');
 console.log(container);

let spanCriado = document.querySelector('.container span');
 console.log(spanCriado);

container.removeChild(spanCriado)



