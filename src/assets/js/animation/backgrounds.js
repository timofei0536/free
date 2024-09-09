export const backgroundsGsap = () => {

  let delay = window.PRELOADER_DELAY  + 2000;



  if (document.querySelector('.pain--big') && document.querySelector('.cta')) {

    gsap.to(".cta__bg", {

      scrollTrigger: {
        trigger: '.cta',
        start: "top bottom",
        end: "center center",
        scrub: 2,
      },
      transform: 'scaleY(0)',

    });
  } else {
    if( document.querySelector('.cta__bg') ){
      document.querySelector('.cta__bg').remove();
    }
  }

  
  setTimeout(function(){

  if (document.querySelector('.mission') && document.querySelector('.portfolio__bg')) {

    gsap.to(".portfolio__bg", {

      scrollTrigger: {
        trigger: '.portfolio__intro',
        start: "top bottom",
        end: "center center",
        scrub: 2,
      },
      transform: 'scaleY(0)',

    });
  }





  if (document.querySelector('.portfolio') && document.querySelector('.pain')) {



    const ReadTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.pain',
        start: "top bottom",
        end: "bottom bottom",
        scrub: 0,
      },

  });

    const animTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.pain',
        start: "top bottom",
        end: "bottom bottom",
        scrub: 2,
      },

  });

    animTl.fromTo(".pain .anim-line-wrap",{
      x: "30px",
      opacity: 0,
    }, {
      x: "0px",
      opacity: 1,
      stagger: {
        each: 0.125,
      }
    },0);

    animTl.fromTo(".pain__number span",{
      y: '15px',
      opacity: 0,
    }, {
      y: 0,
      opacity: 1,
      stagger: {
        each: 0.05,
      }
    },0);



    animTl.fromTo(".pain__number-shadow",{
      transform: 'scaleY(0.3)',
      opacity: 0,
    }, {
      transform: 'scaleY(1)',
      opacity: 1,
      stagger: {
        each: 0.07,
      },
      delay: 0.2,
    },0);

  }




if (window.its_desktop) {

  // processes

  gsap.to(document.querySelectorAll(".processes"), {

    scrollTrigger: {
      trigger: '.processes',
      start: "bottom center+=200px",
      end: "+=1000px",
      scrub: 1.5,
      pin: '.processes',
      pinSpacing: false,
    },

  });


  gsap.to(document.querySelectorAll(".processes > *"), {

    scrollTrigger: {
      trigger: '.processes',
      start: "bottom center+=200px",
      end: "+=200px",
      scrub: 1.5,
    },

    opacity: 0,
  });

}


},delay);


};
