window.SCROLL_EL = 'html';
window.LARGE_TABLET = '1023';

window.its_desktop = true;
if (document.querySelector('body').clientWidth < window.LARGE_TABLET) {
	window.its_desktop = false;
}

if (document.querySelector('.preloader')) {
	window.PRELOADER_DELAY = 6000;
} else {
	window.PRELOADER_DELAY = 0;
}
