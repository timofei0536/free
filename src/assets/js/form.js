$(document).delegate('form', 'submit', function(event) {
	event.preventDefault();
	let lang = navigator.language;
	let data = $(this).serialize() + '&lang=' + encodeURIComponent(lang);
	$.ajax({
		type: "POST",
		url: '/send.php',
		data: data,
		success: function(result) {
			fbq('trackCustom', 'FormSended');
			alert('Hi, I will contact you soon!)');
		}
	});
});