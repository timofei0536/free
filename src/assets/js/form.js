$(document).delegate('form', 'submit', function(event) {
	event.preventDefault();
	let data = $(this).serialize();
	$.ajax({
		type: "POST",
		url: '/send.php',
		data: data,
		success: function(result) {
			// show_popup('thank-you');
			fbq('track', 'FormSended');
			alert('Hi I will contact you soon!)');
		}
	});
});