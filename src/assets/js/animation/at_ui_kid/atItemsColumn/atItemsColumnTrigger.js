export const atItemsColumnTriggerFile =  {
  default: function(params){

    let trigger = document.querySelector(params.elem.getAttribute('data-at-selector'));
    let selector = params.elem.getAttribute('data-at-selector');

    let elems = document.querySelectorAll(selector);

    params.elem.style.opacity = 1;



      gsap.fromTo(elems, {
        x: 50,
        opacity: 0
      }, {
        scrollTrigger: {
          trigger: trigger,
          start: "top bottom",
          end: "center center",
          scrub: 3,
        },
                stagger: {
                    each: 0.2
                },
        opacity: 1,
        x: 0
      })



  },
  custom: function(params){
    alert('custom title222');
  }
}
