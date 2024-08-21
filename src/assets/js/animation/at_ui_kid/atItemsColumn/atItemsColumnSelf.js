export const atItemsColumnSelfFile =  {
  default: function(params){

    let selector = params.elem.getAttribute('data-at-selector');
    let start = 'top bottom' || params.elem.getAttribute('data-at-start');
    let end = 'center center' || params.elem.getAttribute('data-at-end');


    params.elem.style.opacity = 1;

    let elems = document.querySelectorAll(selector);


        let opacity1 = 0;
        let opacity2 = 1;
        let y1 = 0;
        let y2 = 0;
        let x1 = 100;
        let x2 = 0;

        if (params.elem.classList.contains('services__title')) {
            opacity1 =  1;
            x1 = '75px';
        }


        if (params.elem.classList.contains('services__text')) {
            opacity1 =  1;
            x1 = '75px';
        }

        if (params.elem.classList.contains('services__list')) {
            x1 = '50px';
        }



    for (var i = 0; i < elems.length; i++) {
      
    gsap.fromTo(elems[i], {
      x: x1,
      y: y1,
      opacity: opacity1,
    }, {
      scrollTrigger: {
        trigger: elems[i],
        start: start,
        end: end,
        scrub: 2,
      },
      opacity: opacity2,
      x: x2,
      y: y2,
    })

  }


  },
  custom: function(params){
    alert('custom title222');
  }
}
