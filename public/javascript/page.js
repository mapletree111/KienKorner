AOS.init({
    duration: 1200,
})

$(window).on('beforeunload', function(){
    $(window).scrollTop(0);
});