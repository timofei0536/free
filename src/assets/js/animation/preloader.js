if (document.querySelector('.preloader')) {


  let title = document.querySelector('.preloader__title');

  setTimeout(function(){

    let titleLines = title.querySelectorAll('.anim-line:not(.anim-line--none)');
    let titleLetters = title.querySelectorAll('.anim-line');


    gsap.to(titleLetters,{
      stagger: {
        amount: 0.9
      },
      duration: 0.1,
      opacity: 1,
    },
    );


    gsap.to(titleLetters,{
      stagger: {
        amount: 0.9
      },
      transform: "none",
      duration: 1,

      onComplete: function(){
        title.classList.add('at-element--finished');

        gsap.to(titleLetters,{
          stagger: {
            amount: 0.6
          },
          delay: 3,
          duration: 0.6,
          y: "-80%",
          transform: "translate(0%, -50%) translateZ(0px) rotateX(50deg)",
        },
        );



        gsap.to(titleLetters,{
          stagger: {
            amount: 0.6
          },
          duration: 0.25,
          delay: 3.2,
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