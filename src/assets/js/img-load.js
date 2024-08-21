export const imgLoad = () => {
	if (document.querySelector('.img-load')) {
		const preloadList = document.querySelectorAll('.img-load');
		preloadList.forEach((preload) => {
			let imgItems = preload.querySelectorAll('img');
			let imgSourses = preload.querySelectorAll('source');
			let isLoadedImg = false;
			let isLoadedSours = false;
			gsap.from(preload, {
				scrollTrigger: {
					trigger: preload,
					start: 'top 120%',
					end: 'bottom top',
					onEnter: function () {
						if (!isLoadedImg) {
							imgItems.forEach(function (imgItem) {
								let dataSrcImg = imgItem.getAttribute('data-src');
								imgItem.src = dataSrcImg;
								imgItem.removeAttribute('data-src');
							});
							isLoadedImg = true;
							console.log('preloader');
						}
						if (!isLoadedSours && imgSourses.length > 0) {
							const dataSrcSours = preload.querySelectorAll('source[data-src]');
							dataSrcSours.forEach(function (imgSourse) {
								const dataSrcSour = imgSourse.getAttribute('data-src');
								imgSourse.setAttribute('srcset', dataSrcSour);
								imgSourse.removeAttribute('data-src');
							});
							isLoadedSours = true;
							console.log('Sources preloaded');
						}

					}
				}
			});
		});
	}
}