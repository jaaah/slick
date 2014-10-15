function pad(n, width, z) {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

$(document).ready(function() {
    var multiple = $('.thumbs--multiple').slick({
        thumbs: true,
        slidesToShow: 2,
        appendThumbs: $('.thumbs--multiple__thumbs')
    });

    var multipleThumbsBox = $('.thumbs--multiple__thumbs');

    $('.multiple--resizeW').on('click', function(){
        multipleThumbsBox.toggleClass('multipleThumbsWide');
        alert('After manually change width, we need call updateThumbs');
        multiple.getSlick().updateThumbs();
    });

    $('.multiple--resizeH').on('click', function(){
        multipleThumbsBox.css('height', multipleThumbsBox.css('height') == '72px' ? 140 : 72);
        setTimeout(multiple.getSlick().updateThumbs(), 20);
    });



    var centered = $('.thumbs--centered').slick({
        thumbs: true,
        slidesToShow: 3,
        centerMode: true,
        adaptiveHeight: true
    });

    var indexCentered = 6;
    $('.centered-add').on('click', function() {
        indexCentered = indexCentered++ == 11 ? 7 : indexCentered;
        $('.thumbs--centered').slickAdd('<div data-thumb="slick-img/thumbs/img_'+pad(indexCentered, 2)+'.jpg">'
            +'<img src="slick-img/img_'+pad(indexCentered, 2)+'.jpg" ></div>');
    });

    $('.centered-remove').on('click', function() {
        $('.thumbs--centered').slickRemove($('.thumbs--centered').getSlick().$slides.length-1);
    });

    $('.thumbs').slick({
        thumbs: true,
        adaptiveHeight: true
    });

    $('.thumbs--few').slick({
        thumbs: true,
        thumbFrame: false,
        adaptiveHeight: true
    });

    $('.thumbs--container').slick({
        thumbs: true,
        thumbArrows: false,
        appendThumbs: $('.thumbs__container'),
        adaptiveHeight: true
    });

    $('.thumbs--add-remove').slick({
        thumbs: true,
        adaptiveHeight: true
    });

    var slideIndex = 1;
    $('.js-add-slide').on('click', function() {
        slideIndex++;
        console.log( $('.thumbs--add-remove').getSlick())
        $('.thumbs--add-remove').slickAdd('<div data-thumb="slick-img/thumbs/img_0'+slideIndex+'.jpg"><img src="slick-img/img_0'+slideIndex+'.jpg" ></div>');
    });

    $('.js-remove-slide').on('click', function() {
        $('.thumbs--add-remove').slickRemove(slideIndex - 1);
        if (slideIndex !== 0){
            slideIndex--;
        }
    });
});