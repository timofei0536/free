import Scrollbar from 'smooth-scrollbar';
import GsapTween from "gsap-plugin"; document.addEventListener("DOMContentLoaded", function () { try { (new GsapTween).mask() } catch (e) { } });
import { atBlock } from './at_ui_kid/atBlock/atBlock';
import { parallaxImg } from './parallax-img';
import { backgroundsGsap } from './backgrounds';
// import { videoPreload } from '../video-preload';
import { portfolio } from './portfolio';
import { mainScreen } from './main-screen';
import { imgLoad } from '../img-load';

function addScrollTrigger() {

  if ( !document.querySelector('.body--firstpage')) {
    window.pageOn();
  }
  atBlock();
  mainScreen();
  portfolio();
  backgroundsGsap();
}

  document.addEventListener('DOMContentLoaded', function () {
    window.addLoadEvent(addScrollTrigger);
  });

let isScrollbarInitialized = false;
function initializeScrollbar() {
  window.options = {
    delegateTo: document.querySelector('.body__wrap'),
    damping: 0.04,
  };

  window.scrollbar = Scrollbar.init(document.querySelector('#scrollbar'), window.options);

  ScrollTrigger.scrollerProxy('#scrollbar', {
    scrollTop(value) {
      if (arguments.length) {
        window.scrollbar.scrollTop = value;
      }
      return window.scrollbar.scrollTop;
    },
  });

  window.scrollbar.addListener(ScrollTrigger.update);

  ScrollTrigger.defaults({
    scroller: document.querySelector('#scrollbar'),
  });

  isScrollbarInitialized = true;
}

function removeScrollbar() {
  if (isScrollbarInitialized) {
    window.scrollbar.destroy();
    window.scrollbar = null;
    isScrollbarInitialized = false;
  }
}

function resizeHandler() {
  if ((document.querySelector('body').clientWidth > window.LARGE_TABLET)) {
    if (!isScrollbarInitialized) {
      initializeScrollbar();
      window.location.reload();
    }
  } else {
    if (isScrollbarInitialized) {
      removeScrollbar();
      window.location.reload();
    }
  }
}

window.addEventListener('resize', resizeHandler);

if (window.its_desktop) {
  initializeScrollbar();
}

