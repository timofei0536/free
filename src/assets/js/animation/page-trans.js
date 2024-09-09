$(document).ready(function () {
  $(document).on(
    'click',
    "a:not([href^='#']):not([href^='tel']):not([href^='mailto']):not(.anchors a):not(.single-anchors):not([data-anchors]):not(.fancybox):not([target='_blank']):not([data-fancybox]):not([download])",
    function (e) {

      e.preventDefault();

      href = $(this).attr('href');
      window.offpage(href);

    }
  );

  window.offpage = function(href){

      document.querySelector("body").classList.add('body--offpage');

      setTimeout(function () {
        window.location.href = href;
      }, 500);

  }


});

