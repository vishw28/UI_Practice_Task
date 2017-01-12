function stickyHeader(){
    var  mn = $(".navbar.navbar-default");
    var  mns = "navbar-fixed-top";
    var  hdr = $('#header').height(); 

    $(window).scroll(function() {
      if( $(this).scrollTop() > hdr ) {
        mn.addClass(mns);
      } else {
        mn.removeClass(mns);
      }
    });
}

$(document).ready(function(){
    stickyHeader();
    $('.scroll-arrow').click(function(){
        $('html,body').animate({
            scrollTop: $('#body').offset().top
        },700);
    });
});

$(window).resize(function(){
    stickyHeader();
});

$(window).load(function() {
    $('#status').fadeOut();
    $('#loader-wrapper').delay(200).fadeOut('slow');
    $('body').delay(200).css({'overflow-x':'hidden'});
})
