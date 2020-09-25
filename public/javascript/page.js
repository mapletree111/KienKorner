AOS.init({
    duration: 1200,
})

$(window).on('beforeunload', function(){
    $(window).scrollTop(0);
});

$(window).on('load', function () {

    $(".experienceButton").click(function() {
        console.log("Fuck me")
        $('html,body').animate({
            scrollTop: $(".experienceSection").offset().top},
            'slow');
    });
});

