// Passive event listeners
jQuery.event.special.touchstart = {
  setup: function (_, ns, handle) {
    'use strict';
    this.addEventListener('touchstart', handle, {
      passive: !ns.includes('noPreventDefault')
    });
  }
};
jQuery.event.special.touchmove = {
  setup: function (_, ns, handle) {
    'use strict';
    this.addEventListener('touchmove', handle, {
      passive: !ns.includes('noPreventDefault')
    });
  }
};

// Preloader js
$(window).on('load', function () {
  'use strict';
  $('.preloader').fadeOut(0);
});

// on ready state
$(document).ready(function () {
  'use strict';

  // mobileMenu toggle Init
  function mobileMenu() {
    $('.navbar-toggler').on('click', function () {
      $('span').toggleClass('d-inline d-none');
    });
  }
  mobileMenu();

});