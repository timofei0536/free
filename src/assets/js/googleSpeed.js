window.onload = function() {
	if ( document.querySelector('#player2')) {
  		var iframe = document.getElementById('player2');
  		iframe.src = iframe.getAttribute('data-src');
  	}

  	if ( document.querySelector('.portfolio__item-video video')) {
  		let worksVideos = document.querySelectorAll('.portfolio__item-video video source');
  		for (let i = 0; i < worksVideos.length; i++) {
  			worksVideos[i].src = worksVideos[i].getAttribute('data-src');
        worksVideos[i].closest('video').load();
  		}
	  }
};