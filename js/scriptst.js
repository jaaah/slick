function pad(n, width, z) {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

$(document).ready(function() {
    $('.single-item').slick({
        thumbs: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    $('.multiple-items').slick({
        thumbs: true,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 2
    });
    $('.one-time').slick({
        thumbs: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });
    $('.uneven').slick({
        thumbs: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4
    });
    $('.responsive').slick({
        thumbs: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true,
                thumbs: false
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                thumbs: true
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                thumbs: false
            }
        }]
    });

    $('.center').slick({
        thumbs: true,
        centerMode: true,
        infinite: true,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [{
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
        }, {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }]
    });
    $('.lazy').slick({
        thumbs: true,
        lazyLoad: 'ondemand',
        slidesToShow: 3,
        slidesToScroll: 1
    });
    $('.autoplay').slick({
        thumbs: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    });

    $('.fade').slick({
        thumbs: true,
        infinite: true,
        speed: 500,
        fade: true,
        slide: 'div',
        cssEase: 'linear'
    });

    $('.add-remove').slick({
        thumbs: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    var slideIndexH = 6;
    $('.js-add-slide').on('click', function() {
        slideIndexH = slideIndexH++ == 11 ? 7 : slideIndexH;
        $('.add-remove').slickAdd('<div data-thumb="../slick-img/thumbs/img_'+pad(slideIndexH,2)+'.jpg">'
            +'<img src="../slick-img/img_'+pad(slideIndexH,2)+'.jpg" ></div>');
    });

    $('.js-remove-slide').on('click', function() {
        $('.add-remove').slickRemove($('.add-remove').getSlick().$slides.length-1);
    });

    $('.add-remove-vertical').slick({
        thumbs: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true
    });
    var slideIndexV = 6;
    $('.js-add-slide-vertical').on('click', function() {
        slideIndexV = slideIndexV++ == 11 ? 7 : slideIndexV;
        $('.add-remove-vertical').slickAdd('<div data-thumb="../slick-img/thumbs/img_'+pad(slideIndexV,2)+'.jpg">'
            +'<img src="../slick-img/img_'+pad(slideIndexV,2)+'.jpg" ></div>');
    });

    $('.js-remove-slide-vertical').on('click', function() {
        $('.add-remove-vertical').slickRemove($('.add-remove-vertical').getSlick().$slides.length-1);
    });

    $('.filtering').slick({
        thumbs: true,
        slidesToShow: 2,
        slidesToScroll: 2
    });
    var filtered = false;
    $('.js-filter').on('click', function() {
        if (filtered === false) {
            $('.filtering').slickFilter(':even');
            $(this).text('Unfilter Slides');
            filtered = true;
        } else {
            $('.filtering').slickUnfilter();
            $(this).text('Filter Slides');
            filtered = false;
        }
    });

    $('.filtering-rtl').slick({
        thumbs: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        rtl: true
    });
    var filtered_rtl = false;
    $('.js-filter-rtl').on('click', function() {
        if (filtered_rtl === false) {
            $('.filtering-rtl').slickFilter(':even');
            $(this).text('Unfilter Slides');
            filtered_rtl = true;
        } else {
            $('.filtering-rtl').slickUnfilter();
            $(this).text('Filter Slides');
            filtered_rtl = false;
        }
    });

    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        thumbs: true,
        centerMode: true,
        focusOnSelect: true
    });

    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 166) {
            $('.fixed-header').show();
        } else {
            $('.fixed-header').hide();
        }
    });

    $('.single-item-rtl').slick({
        thumbs: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        rtl: true
    });
    $('.multiple-items-rtl').slick({
        thumbs: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        rtl: true
    });


    $('.thumbs--outer').slick({
        thumbs: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        appendThumbs: $('.thumbs__outer')
    });

    $('.thumbs--outer--rtl').slick({
        thumbs: true,
        rtl: true,
        appendThumbs: $('.thumbs__outer--rtl')
    });


    $('.destroy_outer_rtl').on('click', function(){
        $('.thumbs--outer--rtl').unslick();
    })
});