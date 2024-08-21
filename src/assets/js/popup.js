window.show_popup = function (id) {
	setTimeout(function () {
		let heightPop = $('.popup-wrap--active .popup').height() + 60;
		let heightWindow = $(window).height();
		if (heightPop >= heightWindow) {
			$('.popup-wrap--active').addClass('popup-wrap--end');
		}
	}, 500);

	if (!window.its_desktop) {
		window.stopScrollMobile();
	}
	document.querySelector('#' + id).classList.add('popup-wrap--active');
	raf(function () {
		document.querySelector('#' + id).classList.add('popup-wrap--opacity1');
	});

	function xxx() {
		document.querySelector('#' + id).querySelector('.popup').classList.add('popup--opacity1');
		document.querySelector('#' + id).removeEventListener('transitionend', xxx);
	}

	document.querySelector('#' + id).addEventListener('transitionend', xxx);
}

window.close_popup = function (id) {
	$('.popup-wrap').removeClass('popup-wrap--end');
	if (!window.its_desktop) {
		window.startScrollMobile();
	}
	// закрытие видео если оно есть
	let videoElement = document.querySelector('#' + id + ' video');
	if (videoElement && videoElement.tagName.toLowerCase() === 'video') {
		let videoElements = document.querySelectorAll('video');
		videoElements.forEach(function (videoElement) {
			videoElement.pause();
			videoElement.currentTime = 0;
		});
	}
	////
	if (document.querySelector('#' + id).classList.contains('sale-popup--2')) {
		document.querySelector('#' + id).classList.remove('sale-popup--op1');


		function xxx3() {
			document.querySelector('#' + id).classList.remove('popup-wrap--active');
			document.querySelector('#' + id).classList.remove('popup-wrap--opacity1');
			document.querySelector('#' + id).classList.remove('sale-popup--op0');
			document.querySelector('#' + id).classList.remove('sale-popup--2');
			document.querySelector('#' + id).classList.add('sale-popup--1');

			document.querySelector('#' + id).querySelector('.popup--opacity1').classList.remove('popup--opacity1');


			document.querySelector('#' + id).removeEventListener('transitionend', xxx3);
		}

		document.querySelector('#' + id).addEventListener('transitionend', xxx3);



	} else {
		document.querySelector('#' + id).querySelector('.popup').classList.remove('popup--opacity1');

		function xxx() {
			document.querySelector('#' + id).classList.remove('popup-wrap--opacity1');
			setTimeout(function () {
				document.querySelector('#' + id).classList.remove('popup-wrap--active');
			}, 400)
			document.querySelector('#' + id).querySelector('.popup').removeEventListener('transitionend', xxx);

		}
		document.querySelector('#' + id).querySelector('.popup').addEventListener('transitionend', xxx);
	}
}

function raf(fn) {
	window.requestAnimationFrame(function () {
		window.requestAnimationFrame(function () {

			fn();
		});
	});
}


if (document.querySelector('.popup-wrap')) {
	let popups = document.querySelectorAll('.popup-wrap');
	for (var i = 0; i < popups.length; i++) {
		popups[i].addEventListener('click', function (e) {
			if (e.target.closest('.popup') == null) {
				close_popup(e.target.getAttribute('id'));
			}
		});
	}
}