// var url = 'http://api.icndb.com/jokes/random';
// var button = document.getElementById('get-joke');
// var paragraph = document.getElementById('joke');

// button.addEventListener('click', function() {
// 	getJoke();
// });

// function getJoke() {
// 	var xhr = new XMLHttpRequest();
// 	xhr.open('GET', url);
// 	xhr.addEventListener('load', function() {
// 		var response = JSON.parse(xhr.response);
// 		paragraph.innerText = response.value.joke;
// 	});
// 	xhr.send();
// }

// getJoke();

//============jQ==================

var url = 'http://api.icndb.com/jokes/random';
var $button = $('#get-joke').click(function(){
	getJoke();
});
var $paragraph = $('#joke');

function getJoke() {
	$.ajax({
		method: 'GET',
		url: url,
		success: function(res) {
			$paragraph.text(res.value.joke);
		}
	});
}
