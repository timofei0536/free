export const mainScreen = () => {




if ( document.querySelector('.main-screen')) {

window.tlLength = 500;

    let video = document.querySelector('.main-screen__video');

    const tl = gsap.timeline({
    scrollTrigger: {
          trigger: '.main-screen',
          start: "top top", // Старт пина когда элемент в верху вьюпорта
          end: '+='+window.tlLength,
          scrub: 1.5,
          pin: true,
    }
  });


    const tl2 = gsap.timeline({
    scrollTrigger: {
          trigger: '.numbers',
          start: "top bottom", // Старт пина когда элемент в верху вьюпорта
          end: '+='+150,
          scrub: 1.5,
          pin: '.main-screen',
          pinSpacing: false,
    }
  });


    tl2.fromTo('.main-screen .center-wrap, .main-screen__location-wrap',{
      opacity: 1,
      filter: 'blur(0px)',
    },{
      opacity: 0,
      filter: 'blur(15px)',
    },0);





    let title = document.querySelector('.main-screen__title');


    tl.fromTo(title,{
      x: 0,
    },{
      x: () => -title.offsetWidth + document.querySelector('.main-screen .center-wrap').offsetWidth,
    },0);


}


}