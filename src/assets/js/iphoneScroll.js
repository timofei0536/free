if (!window.its_desktop) {
	let lastY = 0;
	let prevent = false;

	document.addEventListener('touchmove', function (e) {
		const currentY = e.touches[0].clientY;
		const isScrollingDown = currentY > lastY;
		lastY = currentY;

		if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight && isScrollingDown) {
			if (!prevent) {
				e.preventDefault();
				console.log('bottom1');
				prevent = true;
			}
		} else if (window.pageYOffset <= 0 && !isScrollingDown) {
			if (!prevent) {
				e.preventDefault();
				console.log('top1');
				prevent = true;
			}
		} else {
			prevent = false;
		}
	}, { passive: false });
}