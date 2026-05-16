const formulario = document.getElementById('formContato');

formulario.addEventListener("submit", function(event){

    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('E-mail').value;
    const assunto = document.getElementById('Assunto').value;
    const telefone = document.getElementById('Telefone').value;
    const mensagem = document.getElementById('mensagem').value;

     fetch("http://localhost:3001/contatos", {

        method: "POST",

        headers: {
        "Content-Type": "application/json"
    },

    body: JSON.stringify({
        nome: nome,
        email: email,
        assunto: assunto,
        telefone: telefone,
        mensagem: mensagem

         })

     });
});
