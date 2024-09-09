if (document.querySelector('.header__burger')) {
  var menu = document.querySelector('.mobile-menu');
  window.burger = document.querySelector('.header__burger');
  var menuWrap = document.querySelector('.mobile-menu__wrap');
  var closeMenu = document.querySelector('.mobile-menu__close');
  window.MenuAllow = true;

  burger.addEventListener('click', function () {
    window.showMenu();
  });
  

  closeMenu.addEventListener('click', function () {
    window.closeMenu();
  });

  menu.addEventListener('click', function(event) {
  if (!menuWrap.contains(event.target)) {
    window.closeMenu();
  }
});



  document.addEventListener('keydown', function (event) {
    const escapeKey = 27;
    if (event.keyCode === escapeKey) {
      window.closeMenu();
    }
  });

window.showMenu = function () {
  menu.classList.add('mobile-menu--active');
  viewMenuAnimation.play();
  if (!window.its_desktop) {
    window.stopScrollMobile();
  }
}


window.setDesktopMenuPosition = function() {

    let rect = burger.getBoundingClientRect();
    let right = document.querySelector('body').offsetWidth - burger.offsetWidth - rect.left;
    menuWrap.style.right = `${right}px`;
    menuWrap.style.top = `${rect.top}px`;
}

$(document).ready(function () {
  if ( window.its_desktop ){
    setTimeout(function(){
      window.setDesktopMenuPosition();
    },1000);
  }
});

window.closeMenu = function () {
  if (window.its_desktop) {
    $('.mobile-menu__nav-item').find('.toogles__item--active').find('.toogles__item-content').fadeToggle(500);
  } else {
    $('.mobile-menu__nav-item').find('.toogles__item--active').find('.toogles__item-content').slideToggle(500);
    window.startScrollMobile();
  }

  $('.mobile-menu__nav-item').find('.toogles__item').removeClass('toogles__item--active');
  $('.mobile-menu .toogles__item-title--active').removeClass('toogles__item-title--active');
  menu.classList.remove('mobile-menu--active');
  viewMenuAnimation.reverse();
}

}


if (document.querySelector('.mobile-menu__drop-wrap')) {
  $('.mobile-menu__nav-item--drop .mobile-menu__drop-wrap').on('click', function () {
    var dropBlock = $(this).closest('.mobile-menu__nav-item--drop').find('.mobile-menu__drop');

    if (dropBlock.is(':visible')) {
      dropBlock.slideUp();
      $(this).removeClass('mobile-menu__drop-wrap--active')
    } else {
      $(this).addClass('mobile-menu__drop-wrap--active')
      dropBlock.slideDown();

    }
  });
}



let viewMenuAnimation = gsap.timeline({
  paused: true,
});

viewMenuAnimation.to('.mobile-menu', {
  duration: 0.5,
  height: '100%',
  display: 'flex',
  opacity: 1,
  ease: 'none',
});

viewMenuAnimation.fromTo(
  [
    '.mobile-menu__nav-item',
    '.mobile-menu__email',
    '.mobile-menu .socials',
  ], {
  opacity: 0,
  y: 50,
}, {
  stagger: {
    amount: 0.5,
  },
  y: 0,
  opacity: 1,
  duration: 0.5,
},
  'together'
);

viewMenuAnimation.fromTo(
  ['.mobile-menu__close', '.mobile-menu__logo'], {
  opacity: 0,
  ease: 'none',
}, {
  opacity: 1,
  duration: 0.5,
},
  'together'
);

