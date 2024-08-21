if (document.querySelector('body').clientWidth > LARGE_TABLET) {
  let cursor = document.querySelector(".cursor");
  let cursorVideo = document.querySelector(".cursor__video");
  let cursorProducts = document.querySelector(".cursor__products");
  let cursorShow = document.querySelector(".cursor__show");
  let cursorShowParag = document.querySelector(".cursor__show p");
  let cursorArrow = document.querySelector(".cursor__arrow");


  gsap.to(cursor, {
    opacity: 1
  });



let currentDuration = 0;
const hoverDuration = 0.5;
const transitionDuration = 2;

const moveCircle = (e, duration) => {
  gsap.to(cursor, duration, {
    x: e.clientX,
    y: e.clientY
  });
}

$(document).on("mousemove", handleMouseMove);

function handleMouseMove(e) {
  const isOverVideo = $(e.target).closest('.main-screen__video').length > 0 || $(e.target).closest('.products__list').length;
  const targetDuration = isOverVideo ? hoverDuration : 0;

  if (currentDuration !== targetDuration) {
    gsap.to({ val: currentDuration }, {
      val: targetDuration,
      duration: transitionDuration,
      onUpdate: function() {
        currentDuration = this.targets()[0].val;
      }
    });
  }

  moveCircle(e, currentDuration);
}

// Setting up an interval to call handleMouseMove function every 1.5 seconds
setInterval(function() {
  // Simulate a mousemove event, assuming the mouse is at a specific position
  // You might need to adjust this depending on your needs
  const simulatedEvent = jQuery.Event("mousemove", {
    pageX: window.innerWidth / 2, // Center of the window horizontally
    pageY: window.innerHeight / 2 // Center of the window vertically
  });

  handleMouseMove(simulatedEvent);
}, 2000);





  window.hoverFunc = function (e) {
    gsap.to(cursor, 0.3, {
      width: '6rem',
      height: '6rem',
      right: '-3rem',
      left: '-3rem',
    });
  }

  window.unhoverFunc = function (e) {
    gsap.to(cursor, 0.3, {
      width: '3rem',
      height: '3rem',
      top: '-1.5rem',
      left: '-1.5rem',
    });
  }


  ////video
  window.iconFunc = function (e) {
    gsap.to(cursor, 0.3, {
      width: '10rem',
      height: '10rem',
      top: '-5rem',
      left: '-5rem',
    });

    gsap.to(cursorVideo, 0.3, {
      opacity: 1
    });

    cursor.classList.add('cursor--icon');
  }

  window.uniconFunc = function (e) {
    gsap.to(cursor, 0.3, {
      width: '3rem',
      height: '3rem',
      top: '-1.5rem',
      left: '-1.5rem',
    });

    gsap.to(cursorVideo, 0.3, {
      opacity: 0
    });

    cursor.classList.remove('cursor--icon');

  }


  ////video
  window.productsFunc = function (e) {
    gsap.to(cursor, 0.3, {
      width: '40rem',
      height: '30rem',
      top: '-20rem',
      left: '-15rem',
    });

    gsap.to(cursorProducts, 0.3, {
      opacity: 1
    });

    cursor.classList.add('cursor--products');
  }

  window.unproductsFunc = function (e) {
    gsap.to(cursor, 0.3, {
      width: '3rem',
      height: '3rem',
      top: '-1.5rem',
      left: '-1.5rem',
    });

    gsap.to(cursorProducts, 0.3, {
      opacity: 0
    });

    cursor.classList.remove('cursor--products');

  }



  window.arrowFunc = function (e) {
    gsap.to(cursor, 0.3, {
      width: '10rem',
      height: '10rem',
      top: '-5rem',
      left: '-5rem',
    });
    gsap.to(cursorArrow, 0.3, {
      opacity: 1
    });
    cursor.classList.add('cursor--icon');
  }

  window.unarrowFunc = function (e) {
    gsap.to(cursor, 0.3, {
      width: '3rem',
      height: '3rem',
      top: '-1.5rem',
      left: '-1.5rem',
    });

    gsap.to(cursorArrow, 0.3, {
      opacity: 0
    });

    cursor.classList.remove('cursor--icon');

  }
  /////show
  window.showFunc = function (e) {
    gsap.to(cursor, 0.3, {
      width: '10rem',
      height: '10rem',
      top: '-5rem',
      left: '-5rem',
    });
    console.log('cursorShow');
    gsap.to(cursorShow, 0.3, {
      opacity: 1
    });

    gsap.to(cursorShowParag, 0.3, {
      opacity: 1,
      delay: 0.1
    });

    cursor.classList.add('cursor--show');
  }

  window.unshowFunc = function (e) {
    gsap.to(cursor, 0.3, {
      width: '3rem',
      height: '3rem',
      top: '-1.5rem',
      left: '-1.5rem',
    });
    gsap.to(cursorShowParag, 0.3, {
      opacity: 0,
      // delay: 0.3
    });
    gsap.to(cursorShow, 0.3, {
      opacity: 0
    });

    cursor.classList.remove('cursor--show');

  }


  window.btnFunc = function (e) {
    cursor.classList.add('cursor--btn');
  }

  window.unbtnFunc = function (e) {
    cursor.classList.remove('cursor--btn');
  }





window.enableSound = false;

if ( document.querySelector('.main-screen__video') ) {
  
  $(document).on("click", function(e) {
    window.enableSound = true;
  });

} else {
    window.enableSound = true;
}


  $(".cursor-products").hover(productsFunc, unproductsFunc);
  $(".cursor-video").hover(iconFunc, uniconFunc);
  $(".cursor-show").hover(showFunc, unshowFunc);
  $(".cursor-arrow").hover(arrowFunc, unarrowFunc);
  $(".cursor-hover").hover(hoverFunc, unhoverFunc);
  $(".cursor-btn").hover(btnFunc, unbtnFunc);


}   