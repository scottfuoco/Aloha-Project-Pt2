$(function () {
    $('input[name=submitBtn]').on('click', function (e) {
        var validEmail = $('input[name=emailInput]')[0].checkValidity();

        if (validEmail) {
            alert('Prepare to be spammed.');
        }
        else {
            e.preventDefault();
            alert('Please enter a valid email address.');
        }
    });

    $('.carousel').flickity({
        cellAlign: 'left',
        contain: true,
        percentPosition: false,
        imagesLoaded: true,
        autoPlay: true,
        prevNextButtons: false,
        wrapAround: true,
    });

    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - 125
                }, 1000);
                return false;
            }
        }
    });

    var cartItemCounter = 0;
    $('.addToCart').click(function(){
        $('.cartItemCounterContainer').show();
        cartItemCounter++;
        $('.cartItemCounter').html(cartItemCounter);
    });
});