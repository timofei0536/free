export const mainScreen = () => {




if ( document.querySelector('.main-screen')) {


    let video = document.querySelector('.main-screen__video');

    const tl = gsap.timeline({
    scrollTrigger: {
          trigger: '.main-screen',
          start: "top top", // Старт пина когда элемент в верху вьюпорта
          end: '+=500px',
          scrub: 1.5,
          pin: true,
        //    onUpdate: (self) => {
        //       var scrollPercent = self.progress;  // Прогресс прокрутки от 0 до 1
        //       console.log(scrollPercent);
        //       var videoDuration = video.duration; // Продолжительность видео в секундах
        //       video.currentTime = scrollPercent * videoDuration;
        // }

    }
  });


    const tl2 = gsap.timeline({
    scrollTrigger: {
          trigger: '.numbers',
          start: "top bottom", // Старт пина когда элемент в верху вьюпорта
          end: '+=500px',
          scrub: 1.5,
          pin: '.main-screen',
          pinSpacing: false,
    }
  });


    tl2.fromTo(document.querySelector('.main-screen .center-wrap'),{
      opacity: 1,
      filter: 'blur(0px)',
      scale: 1,
    },{
      opacity: 0,
      filter: 'blur(15px)',
      scale: 1.2,
    },0);





    let title = document.querySelector('.main-screen__title');


    tl.fromTo(title,{
      x: 0,
    },{
      x: () => -title.offsetWidth + document.querySelector('.main-screen .center-wrap').offsetWidth,
    },0);


}


}