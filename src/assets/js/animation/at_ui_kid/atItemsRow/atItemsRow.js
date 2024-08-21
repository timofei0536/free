export const atItemsRowFile =  {
    default: function(params){
        

        params.elem.style.opacity = 1;

        let selector = params.elem.getAttribute('data-at-selector');
        let inLine = params.elem.getAttribute('data-at-rows');
        let resultItems = document.querySelectorAll(selector);


    let position = '60%';

    if ( params.elem.closest('.numbers')) {
      position = 'center+=100px';
    }




        let loops = Math.round(resultItems.length/inLine);


        for (var j = 1; j <= loops; j++) {
        

        let loopsItems = [resultItems[j*inLine-2],resultItems[j*inLine-1]];

        if ( loops = 1) {
            loopsItems = resultItems;
        }

            gsap.fromTo(loopsItems, {
                y: '30%',
                opacity: 0,
            }, {
                opacity: 1,
                y: "0%",
                duration: 1,
                scrollTrigger: {
                    trigger: resultItems[j*inLine-1],
                    start: "top bottom",
                    end: "top "+position,
                    scrub: 3,
                },
                stagger: {
                    each: 0.3
                },
                onEnter: function(){


                }
            })



        }
  },
    custom: function(params){

    }
}