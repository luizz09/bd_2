let resposta = document.getElementById(`resposta`)
let btn_cad_usuario = document.getElementById(`btn_cad_usuario`)

btn_cad_usuario.addEventListener(`click`, (e)=>{
    e.preventDefault()
    const nome = document.getElementById(`nome`).value
    const email = document.getElementById(`email`).value
    const peso = Number(document.getElementById(`peso`).value)
    const altura = Number(document.getElementById(`altura`).value)

    const valores = {
        nome: nome,
        email: email,
        peso: peso,
        altura: altura,
    }
    console.log(valores)

    fetch('http://localhost:3000/usuario',{
        method: 'POST',
        headers: {'Content-type':'application/json'},
        body: JSON.stringify(valores)
    })
    .then(res => res.json())
    .then(dados => {
        console.log(dados)

        resposta.innerHTML = ``
        resposta.innerHTML += dados.message
        document.querySelector('form').reset()
    })
})