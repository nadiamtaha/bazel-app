// run Counterup 
$(document).ready(function() {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    // run typed 
    var typed = new Typed(".type", {
        strings: [
            "apps",
            "websites",
            "softwares",
        ],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true // Default value
    });


    //Wow
    new WOW().init();
});


// Hide and Show navbar


// should start at 0

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 100) {

        $('.navbar').css({
            'background-color': '#FFF',
            'transition': 'all .5s',
        });

        $('.navbar .nav-link').css({
            'color': '#000',
            'transition': 'all .5s',
        });
        $('.navbar .extra-menus li a i').css({ 'color': '#000', 'transition': 'all .5s', });
        $('.navbar .navbar-brand img').attr('src', 'images/logo-dark.png');



    } else {

        $('.navbar').css({
            'background-color': 'transparent'
        });
        $('.navbar .nav-link').css({
            'color': '#FFF',
        });
        $('.navbar .extra-menus li a i').css({ 'color': '#fff', });
        $('.navbar .navbar-brand img').attr('src', 'images/logo-light.png');
    }

});

function scar() {
    var width = $(window).outerWidth();
    if (width <= 993) {
        $('.navbar .navbar-brand img').attr('src', 'images/logo-dark.png');

    } else {
        $('.navbar .navbar-brand img').attr('src', 'images/logo-light.png');
    }

}

$(window).resize(scar);