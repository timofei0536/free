import Scrollbar from 'smooth-scrollbar';
if (window.its_desktop && document.querySelector('.overflow-bl')) {
	let selectVariants = document.querySelectorAll('.overflow-bl')
	selectVariants.forEach(function (item) {
		window.scrollbarSelect = Scrollbar.init(item, {
			wheelEventTarget: document.querySelector('.overflow-bl'),
			damping: 0.15,
			delegateTo: null
		});
	});
}