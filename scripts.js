document
.querySelector('header button') //seleciona o botão quero ajudar do header
.addEventListener('click', function() { //adiciona um evento quando clicar no botão
    document
    .querySelector('.form') //Seleciona todo o formulário
    .classList.toggle('hide')
})

//classList - adiciona classes
//toggle(alternancia) - funcionalidade de add e remove classe

