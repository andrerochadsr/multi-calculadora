function mostrar() {
    let visor = document.querySelector('.input-tela').value;
}

function visorAdd(botao){
    let elemento = botao
    document.querySelector('.input-tela').value += elemento
}

function visorAddParen(arg){
    if (arg ==='esq') {document.querySelector('.input-tela').value += '('}
    if (arg ==='dir') {document.querySelector('.input-tela').value += ')';}
}

function visorDel() {
    let visor = document.querySelector('.input-tela').value;
    visor.pop()
    console.log(visor)
}