if (window.its_desktop) {
	let bodyWrap = document.querySelector('.body__wrap');
	function handleScroll(event) {
		if (event.ctrlKey && (event.type === 'wheel' || event.type === 'touchmove')) {
			bodyWrap.classList.add('body__wrap--scroll');
		} else {
			bodyWrap.classList.remove('body__wrap--scroll');
		}
	}
	window.addEventListener('wheel', handleScroll);
	window.addEventListener('touchmove', handleScroll);
	function handleKeyUp(event) {
		if (event.key === 'Control') {
			bodyWrap.classList.remove('body__wrap--scroll');
		}
	}
	window.addEventListener('keyup', handleKeyUp);
}
