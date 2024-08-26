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




  window.TopDirection = false;
  window.allowHeaderChange = true;

  if (document.querySelector(SCROLL_EL).clientWidth > LARGE_TABLET) {
    scrollbar.addListener(checkFixed);
  } else {
    document.addEventListener('touchmove', checkFixedMobile);
  }
  function checkFixed() {
    let scroll = scrollbar.scrollTop;
    let previousScroll = window.previousScroll || 0;

    if (scroll > previousScroll && !header.classList.contains('header--hide')) {
      window.TopDirection = true;
      headerFix();
      headerHide();
      headerHeightHide();
      createHeaderVisibilityDiv();
    } else if (scroll < previousScroll && header.classList.contains('header--hide')) {
      window.TopDirection = false;
      headerShow();
      headerHeightShow();
      removeHeaderVisibilityDiv();
    } else if (scroll < 1 && header.classList.contains('header--fixed')) {
      headerHeightHide(true);
      console.log('scroll < 1');
    }

    window.previousScroll = scroll;
  }
  function checkFixedMobile() {
    let scroll = document.querySelector(SCROLL_EL).scrollTop;
    let previousScroll = window.previousScroll || 0;
    if (scroll > 1 && !header.classList.contains('header--fixed')) {
      headerFix();
      headerHeightShow();
      if (document.querySelector('head').classList.contains('home')) {
        window.newColorH();
      } else {
        window.newColor();
      }
      console.log('scroll > 1 if');
    } else if (scroll < 1 && header.classList.contains('header--fixed')) {
      headerHeightHide(true);
      if (document.querySelector('head').classList.contains('home')) {
        window.oldColorH();
      } else {
        window.oldColor();
      }
      console.log('scroll < 1 else');
    }
    // анимация как на desktop
    // if (scroll < previousScroll && header.classList.contains('header--hide')) {
    //   window.TopDirection = false;
    //   headerShow();
    //   headerHeightShow();
    // } else if (scroll > previousScroll && !header.classList.contains('header--hide')) {
    //   window.TopDirection = true;
    //   headerHide();
    //   headerHeightHide();
    // }

    window.previousScroll = scroll;
  }

  function headerHeightHide(headerToStatic) {
    header.classList.remove('header--height1');
    header.classList.add('header--height0');

    function headerRemoveHeight() {
      if (headerToStatic) {
        headerStatic();
        header.classList.remove('header--height0');
      }
      header.removeEventListener('animationend', headerRemoveHeight);
    }

    header.addEventListener('animationend', headerRemoveHeight);
  }

  function headerHeightShow() {
    header.classList.remove('header--height0');
    header.classList.add('header--height1');
    function headerRemoveHeigh() {
      header.removeEventListener('animationend', headerRemoveHeigh);
    }
    header.addEventListener('animationend', headerRemoveHeigh);
  }

  function headerHide() {
    header.classList.add('header--hide');
  }

  function headerShow() {
    header.classList.remove('header--hide');
  }

  function headerFix() {
    header.classList.add('header--fixed');
  }

  function headerStatic() {
    header.classList.remove('header--fixed');
  }

}

function createHeaderVisibilityDiv() {
  let existingDiv = document.querySelector('.header__visibility');
  if (existingDiv) {
    return existingDiv; // Return the existing div if it already exists
  }

  let newDivHeader = document.createElement('div');
  newDivHeader.className = 'header__visibility';
  document.querySelector('header').appendChild(newDivHeader);

  newDivHeader.addEventListener('mouseover', function () {
    console.log('new header');
    headerShow();
    headerHeightShow();
    removeHeaderVisibilityDiv();
  });

  return newDivHeader;
}


function removeHeaderVisibilityDiv() {
  let headerVisibilityDiv = document.querySelector('.header__visibility');
  if (headerVisibilityDiv && headerVisibilityDiv.parentNode) {
    headerVisibilityDiv.parentNode.removeChild(headerVisibilityDiv);
  }
}


if (document.querySelector('.footer .single-anchors') && document.querySelector('.header')) {
  let itemFooterAnchors = document.querySelectorAll('.footer .single-anchors');
  itemFooterAnchors.forEach((item) => {
    item.addEventListener('click', function () {
      checkFixed();
    });
  })
}