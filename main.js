$(document).ready(function(){
    const endpoint = 'https://api.github.com/users/Eduvoices'

    $.ajax(endpoint)
        .done(function(resposta){
            const repositorios = resposta.public_repos
            const seguidores = resposta.followers
            const seguindo = resposta.following
            const avatar = resposta.avatar_url
            const linkBtn = resposta.html_url
            const nome = resposta.name
            const login = resposta.login

            $('#repositorios').append(repositorios)
            $('#seguidores').append(seguidores)
            $('#seguindo').append(seguindo)
            $('#profile-avatar').append(` <img class="profile-avatar" src="${avatar}" alt=".">`)
            $('#profile-link').append(`<a href="${linkBtn}" class="profile-link">Ver no Github</a>`)
            $('#profile-name').append(nome)
            $('#profile-username').append(login)
        })
        .fail(function(){
            $('#repositorios').append("0")
            $('#seguidores').append("0")
            $('#seguindo').append("0")
            $('#profile-avatar').append(` <img class="profile-avatar" src="https://via.placeholder.com/180x180" alt=".">`)
            $('#profile-link').append(`<a href="#" class="profile-link">Ver no Github</a>`)
            $('#profile-name').append("Nome")
            $('#profile-username').append("login")
            alert ('Houve um erro na requisição. Confirme se o endpoint informado está correto')
            throw new Error('Informe o endpoint correto')
        })
})