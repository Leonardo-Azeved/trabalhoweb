$("nav a[href^='#']").click(function(e) {
    e.preventDefault();
    var id = $(this).attr('href');
    var targetOffset = $(id).offset().top - 100;
    $('html, body').animate({
        scrollTop: targetOffset
    }, 1000);
});