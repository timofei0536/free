export const portfolio = () => {




if ( document.querySelector('.portfolio')) {
  if ( document.querySelector('.portfolio__intro') && window.its_desktop ) {



let portfolio = document.querySelector('.portfolio__intro-wrap');
let portfolioIntro = document.querySelector('.portfolio__intro');

let tlPinDuration = 3000;

  let soundTLOn = gsap.timeline({
    scrollTrigger: {
      trigger: portfolio,
      start: "center bottom",
      end: '+='+tlPinDuration/2 +'px',
      scrub: true,
    }
  });



  soundTLOn.to(portfolio,{
    opacity:1,

            onReverseComplete: function(){
              if(window.player2){
                  try {
                    window.player2.mute()
                  } catch (error) {
                      // console.error("Произошла ошибка при попытке воспроизвести видео:", error);
                  }
              }
            },
            
        onStart: () => {
          if ( window.enableSound ) {
            if(window.player2){
                  try {
                    window.player2.unMute()
                  } catch (error) {
                      // console.error("Произошла ошибка при попытке воспроизвести видео:", error);
                  }
            }
          }
        },
            onUpdate: function() {
                let  progress = soundTLOn.progress();
                if(window.player2){
                  try {
                    window.player2.setVolume(progress*100/4);
                  } catch (error) {
                      // console.error("Произошла ошибка при попытке воспроизвести видео:", error);
                  }


                }
             },
  })






  let tlPin = gsap.timeline({
    scrollTrigger: {
      trigger: portfolio,
      pin: true,
      start: "center center",
      end: '+='+tlPinDuration+'px',
      scrub: true,
      pinSpacing: true,
    }
  });

  tlPin.to(portfolioIntro,{
    scale: 1,
    duration: 1,
  },0)

    tlPin.to(portfolio.querySelectorAll('.portfolio__intro-item img, .portfolio__intro-item iframe'),{
    scale: 1,
    duration: 1,
  },0)


  //   tlPin.to(portfolio.querySelectorAll('.portfolio__intro-item:not(.portfolio__intro-item--center)'),{
  //   opacity: 0.5,
  //   duration: 1,
  // },0)


function calculateProportions(x, y) {
  let a = x / (x + y);
  let b = y / (x + y);

  return {duration1: a, duration2: b};
}

  let length1 = document.querySelector('body').offsetHeight;
  let length2 = (tlPinDuration/2) - length1;

  let proportions = calculateProportions(length1, length2);

  let duration1 = proportions.duration1.toFixed(2);
  let duration2 = proportions.duration2.toFixed(2);

  
  // console.log(duration1+'__'+duration2);



    tlPin.to(portfolio.querySelector('.portfolio__intro-item--center'),{
     scale: 0.7,
     opacity: 0,
     duration: duration1,
      onUpdate: function() { 

          let  progress = tlPin.progress();  

          let range1  = 0.5;

          let range2 = range1 + ( range1*duration1);

          const scaledProgress = (progress - range1) / (range2 - range1);


          const clampedProgress = Math.max(0, Math.min(1, scaledProgress));

          if(window.player2){
                  try {
                    window.player2.setVolume((1-clampedProgress)*100/4);
                  } catch (error) {
                      // console.error("Произошла ошибка при попытке воспроизвести видео:", error);
                  }
          }

      },

        onReverseComplete: function(){
              document.querySelector('.portfolio__title').style.opacity = 1;
        },
            
        onStart: () => {
          document.querySelector('.portfolio__title').style.opacity = 0;
        },


  },1)

  tlPin.to(portfolio,{
    opacity: 1,
    duration: duration2,
    delay: duration1,
        onReverseComplete: function(){
              document.querySelector('.portfolio__title').style.opacity = 0;
        },
            
        onStart: () => {
          document.querySelector('.portfolio__title').style.opacity = 1;
        },
  },1);




}






    let items = document.querySelectorAll('.portfolio__item');


items.forEach((item, index, array) => {
  let pinSpacing = false;
  let end = 3000;
  let opacity = 0;
  if ( index == array.length - 1 ) {
    pinSpacing = true;
    opacity = 1;
    end = 500;
  }


  const tl2 = gsap.timeline({
    scrollTrigger: {
          trigger: item.querySelector('.portfolio__item-content'),
          start: "top bottom", // Старт пина когда элемент в верху вьюпорта
          end: 'bottom bottom ',
          scrub: 2,
    }
  });

  tl2.fromTo(item.querySelectorAll('.portfolio__item-content > *'),{
    opacity: 0,
  }, {
    opacity: 1,
    stagger: {
      each: 0.3
    }
  });




  const tlPin = gsap.timeline({
    scrollTrigger: {
      trigger: item,
      pin: true,
      start: "top top",
      end: '+='+end+'px',
      scrub: true,
      pinSpacing: pinSpacing,
    }
  });


  const tl = gsap.timeline({
    scrollTrigger: {
          trigger: item,
          start: "top top+=100px", // Старт пина когда элемент в верху вьюпорта
          end: '+=1000px',
          scrub: true,
    }
  });

tl.to(item, {
  scale: 0.7,
  duration: 1,
});

tl.to(item, {
  opacity: opacity,
  duration: 0.01,
});





    });

}


}