$(document).ready(function(){
    const endpoint = 'https://api.github.com/users/ogiansouza'

    $.ajax(endpoint).done(function(resposta){
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
})