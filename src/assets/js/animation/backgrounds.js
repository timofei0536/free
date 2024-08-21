export const backgroundsGsap = () => {

  let delay = window.PRELOADER_DELAY  + 2000;

  setTimeout(function(){



  if (document.querySelector('.mission') && document.querySelector('.paint')) {

    let y = '-10rem';
    
    if (!window.its_desktop){
      y = '-5rem';
    }


    gsap.to(document.querySelector(".mission__bg"), {

      scrollTrigger: {
        trigger: '.mission',
        start: "top bottom",
        end: "center center",
        scrub: 2,
      },
      y: y,

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


    ReadTl.fromTo(document.querySelector(".pain__bg"),{
      background: 'linear-gradient(0deg, #29292F 60%, #29292F 100%)',
      height: '200vh',
    }, {
      background: 'linear-gradient(180deg, #FC1234 65%, #000000 98%)',
      height: '120vh',
    },0);

    ReadTl.fromTo(document.querySelector(".pain .ticker"),{
      opacity: 0,
    }, {
      opacity: 1,
    },0);

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
      x: "-50%",
      scale: 1,
    }, {
      x: "0%",
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



  // gsap.to(document.querySelectorAll(".uniq__wrap"), {

  //   scrollTrigger: {
  //     trigger: '.uniq',
  //     start: "bottom center+=200px",
  //     end: "+=1000px",
  //     scrub: 1.5,
  //     pin: '.uniq',
  //     pinSpacing: false,
  //   },

  // });


  // gsap.to(document.querySelectorAll(".uniq__wrap"), {

  //   scrollTrigger: {
  //     trigger: '.uniq',
  //     start: "bottom center+=200px",
  //     end: "+=200px",
  //     scrub: 1.5,
  //   },

  //   opacity: 0,
  // });



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
