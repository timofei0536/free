$(document).ready(function(event) {
fetch('https://ipapi.co/json/')
  .then(response => response.json())
  .then(data => {
    window.country = data.country_name;
  })
  .catch(error => {
    window.country = "error";
  });
});


$(document).delegate('form', 'submit', function(event) {
	event.preventDefault();
	let lang = navigator.language;
	let data = $(this).serialize() + '&lang=' + encodeURIComponent(lang) + '&country=' + encodeURIComponent(window.country);;
	alert(data);
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