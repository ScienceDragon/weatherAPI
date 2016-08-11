// JavaScript Document

$ (document).ready(function() {
	var lat, lon, api_url;
	
	if ("geolocation" in navigator) {
		
		$('#showTemp') .on('click', function() {
			navigator.geolocation.getCurrentPosition(getLocation);
	
			function getLocation (position) {
				lat = position.coords.latitude;
				lon = position.coords.longitude;
				console.log(position);
				
				api_url = 'http://api.openweathermap.org/data/2.5/weather?lat=' +
								lat + '&lon=' +
								lon + '&units=imperial&appid=7c33f6cb0bfa5af84d2c2b34084dad41';
								
				console.log(position);				
								
				$.ajax({
					url : api_url,
					method : 'GET',
					success : function (data) {
						var tempr = data.main.temp;
						$('#result').text(tempr + 'º');				
					}
				});
			}
		});
		
	} else {
		alert('Your browser does not support geolocation. Sorry ~Whomp Whowmp..');
	}
});

