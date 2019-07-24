$( document ).ready(function(){
	//type effect
    $('span.text-change').typed({
        strings: ["ux & ui", "diseño", "<code>", "ilustración", "Pokemón"], //array text
        typeSpeed: 80,
        backDelay: 600,
        callback: function () { $(this) }
    });

    });

    // Toggle tranparent navbar when the user scrolls the page

    $(window).scroll(function() {
      if($(this).scrollTop() > 0)  /*height in pixels when the navbar becomes non opaque*/
      {
          $('.opaque-navbar').addClass('opaque');
      } else {
          $('.opaque-navbar').removeClass('opaque');
      }
  });
