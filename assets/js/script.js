(function ($) {
  'use strict';

  $(window).on('load', function () {
     // preloader init
     setTimeout (function(){
        $('.preloader').fadeOut(200);
     },50);

  });

  $(document).ready(function () {

     // mobileMenu toggle Init
     function mobileMenu() {
        $('.navbar-toggler').on('click', function () {
           $('span').toggleClass('d-inline d-none');
        });
        
     }
     mobileMenu();
  });

})(jQuery);