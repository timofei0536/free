const metaThemeColor = document.querySelector('meta[name="theme-color"]');
const defaultColor = metaThemeColor.getAttribute('content');

window.newColor = function () {
	const header = document.querySelector('.header--fixed');
	setTimeout(function () {
		if (header) {
			const headerFixedColor = getComputedStyle(header).backgroundColor;
			metaThemeColor.setAttribute('content', headerFixedColor);
		}
	}, 100);
}

window.oldColor = function () {
	metaThemeColor.setAttribute('content', defaultColor);
}