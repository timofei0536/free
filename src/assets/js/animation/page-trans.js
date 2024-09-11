$(document).ready(function () {
  $(document).on(
    'click',
    "a:not([href^='#']):not([href^='tel']):not([href^='mailto']):not(.anchors a):not(.single-anchors):not([data-anchors]):not(.fancybox):not([target='_blank']):not([data-fancybox]):not([download]), .anchors a[data-anchors='false']",
    function (e) {
      e.preventDefault();
      href = $(this).attr('href');
      window.offpage(href);
    }
  );

  window.offpage = function(href){
      gsap.to('body',{
          opacity: 0,
          scale: 0.8,
          onComplete: function(){
            window.location.href = href;  
          }
      });
  }

  window.pageOn = function(href){

    const pageOn = gsap.timeline();

        pageOn.to('body',{
          scale: 0.8,
          duration: 0.01,
        });

    pageOn.to('body',{
        opacity: 1,
        scale: 1,
        duration: 1,
        onComplete:function(){
          ScrollTrigger.refresh();
        }
    });

  }




});

