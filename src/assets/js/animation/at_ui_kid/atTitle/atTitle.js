import {textLinesScript} from '../text-lines-script';


export const atTitleFile =  {
	default: function(params){

		let title = params.elem;
    textLinesScript(title);
    setTimeout(function(){

        let titleLines = title.querySelectorAll('.anim-line');


      params.elem.style.opacity = 1;


    params.tl.fromTo(titleLines, {
      yPercent: 100,
    }, {
          stagger: {
            each: 0.3,
          },
          yPercent: 0,
          duration: 1,
    },
      0
    );

},500);

	},
  custom: function(params){

    // custom title function используется в showreal.
    let title = params.elem;

    params.elem.style.opacity = 1;


    let titleLetters = title.querySelectorAll('.letter');

    params.tl.to(titleLetters,{
          stagger: {
            amount: 1
          },
          ease: "power1.out",
          duration: 0.4,
          opacity: 1,
    },
      0
    );


    params.tl.to(titleLetters,{
          stagger: {
            amount: 1
          },
          ease: "power1.out",
          transform: "none",
          duration: 1.5,
          delay: 0.5,
                    onComplete: function(){
                      title.classList.add('at-element--finished');
          }
    },
      0
    );

  }
}
