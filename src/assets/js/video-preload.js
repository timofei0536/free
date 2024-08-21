export const videoPreload = () => {
	if (document.querySelector('.video-preload')) {
		const preloadList = document.querySelectorAll('.video-preload');
		preloadList.forEach((preload) => {
			let videoElements = preload.querySelectorAll('video');
			let isLoaded = false;
			let elementPlay = preload.querySelector('.video-preload__play');
			let elementVideo = preload.querySelector('video');

			gsap.from(preload, {
				scrollTrigger: {
					trigger: preload,
					start: 'top 110%',
					end: 'bottom top',
					onEnter: function () {
						if (!isLoaded) {
							videoElements.forEach(function (videoElement) {
								let dataSrc = videoElement.querySelector('source').getAttribute('data-src');
								videoElement.querySelector('source').src = dataSrc;
								videoElement.load();
								videoElement.querySelector('source').removeAttribute('data-src');
							});

							isLoaded = true;
							console.log('preloader');
						}
					}
				}
			});
			elementPlay.addEventListener('click', function () {
				window.playVideo(this);
			});
			elementVideo.addEventListener('click', function () {
				window.pauseVideo(this);
			});
		});
		window.playVideo = function (element) {
			element.closest('.video-preload').classList.add('video-preload--play');
			element.closest('.video-preload').querySelector('video').play();
		}

		window.pauseVideo = function (element) {
			let videoElement = element.closest('.video-preload').querySelector('video');
			if (videoElement.closest('.video-preload').classList.contains('video-preload--play')) {
				videoElement.pause();
				videoElement.currentTime = 0;
				videoElement.closest('.video-preload').classList.remove('video-preload--play');
			}
		}
	}
}