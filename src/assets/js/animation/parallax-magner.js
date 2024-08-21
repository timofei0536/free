var mWrap = document.querySelectorAll(".magnet-wrap");


function parallaxIt(e, wrap, movement = 1) {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var boundingRect = wrap.mArea.getBoundingClientRect();
    var relX = e.pageX - boundingRect.left;
    var relY = e.pageY - boundingRect.top;

    let cov = 1;
    if ( wrap.hasAttribute('data-cov')) {
        cov = wrap.getAttribute('data-cov');
    }

    gsap.to(wrap.mContent, {
        x: (relX - boundingRect.width / 2) * movement / cov,
        y: (relY - boundingRect.height / 2 - scrollTop) * movement / cov,
        ease: "power1",
        duration: 0.6
    });
}

if (document.querySelector('body').clientWidth > window.LARGE_TABLET) {
    if (mWrap) {
        mWrap.forEach(function (wrap) {
            wrap.mContent = wrap.querySelector(".magnet-element");

            wrap.mArea = wrap.querySelector(".magnet-area");

            wrap.mArea.addEventListener("mousemove", function (e) {
                parallaxIt(e, wrap);
            });

            wrap.mArea.addEventListener("mouseleave", function (e) {
                gsap.to(wrap.mContent, {
                    scale: 1,
                    x: 0,
                    y: 0,
                    ease: "power3",
                    duration: 2
                });
            });
        });
    }
}