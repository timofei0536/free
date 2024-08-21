export const atCustomFile =  {
	default: function(params){


		let elem = params.elem;
    let delay = 1500;
    
    if ( elem.closest('.advertising') ) {
      delay = 2500;
    }


    setTimeout(function(){

      params.tl.to(elem, {
        opacity: 1,
        duration: 2,
      },1
      );


    },delay)



  },
  custom: function(params){
    alert('custom title222');
  }
}
