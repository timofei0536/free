$(document).ready(function () {
  $(document).on(
    'click',
    "a:not([href^='#']):not([href^='tel']):not([href^='mailto']):not(.anchors a):not(.single-anchors):not([data-anchors]):not(.fancybox):not([target='_blank']):not([data-fancybox]):not([download])",
    function (e) {
      e.preventDefault();
      document.querySelector("body").classList.add('body--opacity0');
      setTimeout(() => {
        document.querySelector("body").classList.remove('body--opacity0');
      }, 1000)
      var self = this;
      setTimeout(function () {
        window.location.href = $(self).attr('href');
      }, 250);
    }
  );
});

