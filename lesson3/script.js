$( document ).ready(function() {
    


var arrowLeft = $('.left'),
    arrowRight = $('.right');
    //sliderInner = $('.slider-inner'),
    //hiddenImageCount = sliderInner.children().length -1;

arrowRight.on('click', function(e) {
    e.preventDefault();
    var sliderInner = $(this).parent().find('.slider-inner');
    var hiddenImageCount = sliderInner.children().length -1;
    var currentMargin = parseInt(sliderInner.css("marginLeft") || 0); 
    if (currentMargin != hiddenImageCount * -600) { 
        sliderInner.css("marginLeft", currentMargin - 600);
    } else {
        sliderInner.css("marginLeft", 0);
    }
    
});

arrowLeft.on('click', function(e) {
    e.preventDefault();
    var sliderInner = $(this).parent().find('.slider-inner');
    var hiddenImageCount = sliderInner.children().length -1;
    var currentMargin = parseInt(sliderInner.css("marginLeft") || 0); 
    if (currentMargin != 0) { 
        sliderInner.css("marginLeft", currentMargin + 600);
    } else {
        sliderInner.css("marginLeft", hiddenImageCount * -600);
    }
    
});


});