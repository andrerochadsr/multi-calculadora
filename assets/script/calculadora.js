
function resultado() {
    let visor = document.querySelector('.input-tela').value;
    try {
        let opera = eval(visor)
        document.querySelector('.input-tela').value = opera
    } catch {
        document.querySelector('.input-tela').value = 'ERRO!'
    }
}
function visorAdd(botao){
    let elemento = botao
    document.querySelector('.input-tela').value += elemento
}
function visorAddParen(arg){
    if (arg ==='esq') {document.querySelector('.input-tela').value += '(';}
    if (arg ==='dir') {document.querySelector('.input-tela').value += ')';}
}
function visorDel() {
    let visor = document.querySelector('.input-tela').value;
    document.querySelector('.input-tela').value = visor.slice(0, visor.length -1)
}