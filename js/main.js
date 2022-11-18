$(document).ready(function(){
    
    $('form').on('submit', function(e){
        e.preventDefault()
    })

    $('#telefone').mask('(00) 00000 - 0000')
    $('#cpf').mask('000.000.000-00')
    $('#CEP').mask('00.000-000')

    $('form').validate({
            rules: {
                nome: {
                    required: true,
                },
                email: {
                    required: true,
                    email: true
                },
                telefone: {
                    required: true
                },
                CEP: {
                    required: true
                },
                cpf: {
                    required: true
                },
                endereço: {
                    required: true
                },
            },
            messages: {
                nome: 'Por favor, insira o seu nome completo',
                email: 'Por favor, nos informe seu e-mail para contato',
                telefone: 'Por favor, nos informe seu telefone para contato',
                CEP: 'Precisamos do seu CEP para enviar o produto escolhido',
                endereço: 'Precisamos do seu endereço ou sua encomenda ficará perdida no espaço-tempo',
                cpf: 'Sem o seu CPF, não poderemos saber quem é o nosso cliente preferido'
            },

            invalidHandler: function(evento, validador){
                let camposIncompletos = validador.numberOfInvalids()
                if (camposIncompletos) {
                    alert(`Existe(m) ${camposIncompletos} campo(s) incompleto(s)`)
                }
            }
    })

})



