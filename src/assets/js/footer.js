if (document.querySelector('.footer__space') && window.its_desktop) {
  let footerSize = document.querySelector(".footer").clientHeight

  document.querySelector(".footer__space").style.marginBottom = footerSize + "px"
  document.querySelector(".footer__space div").style.height = footerSize + "px"

  document.querySelector('.footer__space').addEventListener('mouseenter', function () {
    document.querySelector('#scrollbar').classList.add('scrollbar--footer');
  });
  if (document.querySelector('.footer')) {
    document.querySelector('.footer').addEventListener('mousemove', function (e) {
      let mouseFooterPosiziton = scrollbar.size.container.height - e.pageY;
      let scrollBottom = scrollbar.size.content.height - scrollbar.size.container.height - scrollbar.scrollTop;
      if (document.querySelector('footer').offsetHeight - scrollBottom < mouseFooterPosiziton) {
        document.querySelector('#scrollbar').classList.remove('scrollbar--footer');
      } else {
        document.querySelector('#scrollbar').classList.add('scrollbar--footer');
      }
    });
  };
}