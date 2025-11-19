// quando clicar em qualquer link dentro do nav
$("nav a").click(function(e) {
    // impede o comportamento padrão do link (não recarrega a página)
    e.preventDefault();
    // pega o valor do atributo href do link clicado (ex: #home, #detalhes)
    var id = $(this).attr('href');
    // calcula a posição do elemento de destino na página
    var targetOffset = $(id).offset().top;
    // anima a rolagem da página até o elemento de destino em 1 segundo
    $('html, body').animate({
        scrollTop: targetOffset
    }, 1000);
});