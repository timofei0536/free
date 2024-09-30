if (document.querySelector('.preloader')) {


  let title = document.querySelector('.preloader__title');

  setTimeout(function(){

    let titleLines = title.querySelectorAll('.anim-line');


    gsap.to(titleLines,{
      filter: 'blur(0px)',
      opacity: 1,
      stagger: {
        amount: 0.6
      },
      duration: 0.8,

      onComplete: function(){

        gsap.to(titleLines,{
          stagger: {
            amount: 0.6
          },
          duration: 1,
          delay: 1.2,
          opacity: 0,

          onComplete: function(){


            gsap.to('.cursor', {
              opacity: 1,
              duration: 5,
            });

            gsap.to(document.querySelector('.preloader'), {
              opacity: 0,
              duration: 0.3,
              delay: 0.5,
              onComplete: function () {
                setTimeout(function () {
                  document.querySelector('.preloader').remove();
                  if (document.querySelector('body').clientWidth < window.LARGE_TABLET) {
                    window.startScrollMobile();
                  }
                }, 500);
              }
            });


          }
        },
        );




      }
    },
    );



  },1000); 





} else {
  gsap.to('.cursor', {
    opacity: 1,
    duration: 5,
  });
}