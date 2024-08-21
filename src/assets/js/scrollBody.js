window.stopScrollMobile = function () {
	if (!document.querySelector('body').classList.contains('scroll')) {
		document.querySelector('body').classList.add('scroll');
	}

}
window.startScrollMobile = function () {
	if (document.querySelector('body').classList.contains('scroll')) {
		document.querySelector('body').classList.remove('scroll');
	}
	let popupWrap = document.querySelectorAll('.popup-wrap--active');
	if (popupWrap.length == 1) {
		document.querySelector('body').classList.remove('scroll');
	}
}