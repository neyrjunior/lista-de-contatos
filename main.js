const form = document.getElementById('form');
const nome = document.getElementById('nome');
const telefone = document.getElementById('telefone');
let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    addLinhas();
})
function addLinhas() {
    let linha = `<tr>`
    linha += `<td>${nome.value}</td>`
    linha += `<td>${telefone.value}</td>`
    linha += `</tr>`
    linhas += linha

    const bodyTable = document.querySelector('tbody');
    bodyTable.innerHTML = linhas;

}
