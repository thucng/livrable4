(function () {
    var carousel = document.querySelector('[data-carousel]');

    var options = {
        container: '.quote__slider',
        axis: 'vertical',
        items: carousel.dataset.items || 1,
        gutter: carousel.dataset.gutter || 0,
        edgePadding: carousel.dataset.edgePadding || 0,
        speed: carousel.dataset.speed || 1000,
        loop: carousel.dataset.loop || false,
        navContainer: '.quote__control',
        autoplay: true
    };

    var slider = tns(options);
})();