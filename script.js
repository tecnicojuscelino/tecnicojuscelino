const evento = document.getElementById('send')
const enviarFormulario =() => {
        let nome = document.getElementById('nome').value;
        let enderenço = document.getElementById('enderenço').value;
        let mensagem = document.getElementById('mensagem').value;
        let numero=5592999998101;
var win = window.open(`https://wa.me/${numero}?text=%20%20Cliente:%20%20${nome}localizada%20Em:
%20${enderenço}, Abriu%20chamado:%20${mensagem}%20 ⚠chamado%20Feito⚠ `,'_blank');       
}
evento.addEventListener('click', enviarFormulario)



//#endregion
