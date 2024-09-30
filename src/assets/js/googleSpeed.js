window.onload = function() {
  var iframe = document.getElementById('player2');
  iframe.src = iframe.getAttribute('data-src');
  worksVideos = document.querySelectorAll('.portfolio__item-video video source');
  for (var i = 0; i < worksVideos.length; i++) {
  	worksVideos[i].src = worksVideos[i].getAttribute('data-src');
  }
};