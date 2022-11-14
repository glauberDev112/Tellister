
const form_contato = document.getElementById('form-contato')
form_contato.addEventListener('submit', function (e) {
    e.preventDefault()
    const nome_id = document.getElementById('nome').value
    const tel_id = document.getElementById('telefone').value
    
    let html_table = document.getElementById('contatos')
    html_table.innerHTML += `<tr>
    <td>${nome_id}</td>
    <td>${tel_id}</td>
</tr>`
})