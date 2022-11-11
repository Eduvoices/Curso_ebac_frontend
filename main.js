$(document).ready(function() {
    $('header button').click(function(){
        $('form').slideDown()
    })

    $('#btn-cancelar').click(function(){
        $('form').slideUp()
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        const addNovaTarefa = $('#tarefa').val()
        const novaTarefa = $(`<li> <input type="checkbox" id="${addNovaTarefa}"></li>`);
        $(`<label for="${addNovaTarefa}" class="teste"> <div id="texto">${addNovaTarefa}</div></label>`).appendTo(novaTarefa)

        $(novaTarefa).appendTo('ul')
        $(novaTarefa).fadeIn(1000)
        $('#tarefa').val('')
    })
})