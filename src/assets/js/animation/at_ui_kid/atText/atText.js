import {textLinesScript} from '../text-lines-script';


export const atTextFile =  {
	default: function(params){

    let text = params.elem;
    textLinesScript(text);

    setTimeout(function(){
		

    params.elem.style.opacity = 1;


    let textLines = text.querySelectorAll('.anim-line');


    let amount = textLines.length * 0.2;
    
    if ( textLines.length > 8 ) {
      amount = 1.5;
    }



    params.tl.fromTo(textLines, {
      y: 20,
      opacity: 0
    }, {
      stagger: {
        amount: amount
      },
      y: 0,
      opacity: 1,
      duration: 1,
    })

    },500);

  },
  custom: function(){
    alert('custom text animation');
  }
}
