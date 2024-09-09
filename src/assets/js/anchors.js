function checkAnchor() {
  if (window.location.hash) {
    const hash = window.location.hash;
    if (hash.startsWith('#anchor')) {
      var elementid = window.location.hash.replace("#anchor", "");
      if (elementid) {
        scrollToElement(elementid, true);
      }
    }
  }
}

window.addLoadEvent = function (func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function () {
      if (oldonload) {
        oldonload();
      }
      func();
    }
  }
}



document.addEventListener('DOMContentLoaded', function () {
  window.addLoadEvent(checkAnchor);
});

$('.anchors a:not([data-anchors]), .single-anchors').on("click", function (e) {
  if (this.hasAttribute('data-mobile')) {
    if (document.documentElement.clientWidth < window.LARGE_TABLET) {
      return;
    }
  }

  e.preventDefault();

  var elementid = $(this).attr("href");

  if (elementid.search('#') == -1) { //element та текущей странице
    scrollToElement(elementid);

  } else { //element может быть на другой странице

    var elementHref = elementid.substring(0, elementid.indexOf('#'));
    var elementid = elementid.substr(elementid.indexOf("#") + 1);
    elementHref += "#anchor" + elementid;

    if (document.querySelector('#' + elementid)) { //element на текущей странице
      scrollToElement(elementid);

    } else { //element на другой странице

      window.offpage(elementHref);

    }
  }
});



function scrollToElement(elementId, onload) {

  if (window.its_desktop) {
    if (onload) {
      scrollbar._init();
    }
    var destination = $("#" + elementId).offset().top + scrollbar.scrollTop;
    if (document.querySelector('body').clientWidth > window.LARGE_DESKTOP) {
      scrollbar.scrollTo(0, destination - 100, 1500);
    } else if (window.its_desktop) {
      scrollbar.scrollTo(0, destination - 50, 1500);
    }

    if (document.querySelector('.header__burger')) {
      window.closeMenu();
    }
  } else {
    var destination = $("#" + elementId).offset().top;
    $(window.SCROLL_EL).animate({
      scrollTop: destination
    }, 1500);
    if (document.querySelector('.header__burger')) {
      window.closeMenu();
    }
  }
  history.pushState("", "", window.location.pathname + window.location.search);
}