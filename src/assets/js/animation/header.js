if (document.querySelector('header')) {
  let header = document.querySelector('.header');

  let delay = window.PRELOADER_DELAY / 1000;



  
let mainScreenItems = '.header__logo, .header__nav-item, .header__btn, .main-screen__location';

if (!window.its_desktop) {
 mainScreenItems = '.header__logo, .header__burger, .main-screen__round, .main-screen__bottom-title, .main-screen__bottom-right-border, .main-screen__stack, .widget ';
}

  gsap.fromTo(mainScreenItems, 
{
  opacity: 0,
  y: '15px',
},
  {
    opacity: 1,
    y: '0px',
    duration: 1,
    xPercent: 0,
    stagger: {
      each: 0.2
    },
    onComplete: function(){

      if( document.querySelector('.main-screen') ){
        document.querySelector('.main-screen').classList.add('main-screen--animated');
      }
      document.querySelector('.header').classList.add('header--animated');
    },
    delay: delay,
  })


if ( window.its_desktop ){

let lastScrollTop = 0;

scrollbar.addListener(function(){
  let scrollTop = scrollbar.scrollTop;

  let startFixed = 200;

  if ( window.tlLength ){
    startFixed = window.tlLength;
  }
  
    if ( scrollTop > startFixed ) {
      header.classList.add('header--fixed');
    } else {
      header.classList.remove('header--fixed');
    }
    
  if (scrollTop > lastScrollTop & scrollTop > startFixed ) {


    gsap.to(header, {
      y: '-110%',opacity: 0,
      duration: 1, ease: "power2.out",
    });

  } else {
    gsap.to(header, {
      y: '0%', opacity: 1,
      duration: 1, ease: "power2.out",
  });
    
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Не позволяет отрицательное значение скролла

});
}

}