const form = document.getElementById('form-deposito')
let numA = document.getElementById('numero-a')
let numB = document.getElementById('numero-b')

form.addEventListener('submit', function(e) {
    
    e.preventDefault()


    if (numB.value > numA.value) {
        const containerMsg = document.querySelector('.sucesso')
        const mensagemSucesso = `Sucesso! O número <b> ${numB.value} </b> é maior do que o número <b>${numA.value}</b>, portanto o formulário é válido. =)`;
        containerMsg.innerHTML = mensagemSucesso
        containerMsg.style.display = 'block'


        numA.value = ''
        numB.value = ''


    } else {
        const containerMSN = document.querySelector('.sucesso')
        const mensagemErro = `Que pena, o número <b>${numB.value}</b> não é maior do que o número <b>${numA.value}</b>, portanto o formulário não é valido. =(`
        containerMSN.innerHTML = mensagemErro
        containerMSN.style.display = 'block';

        numA.value = ''
        numB.value = ''
    }

})
