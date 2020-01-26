document.addEventListener('DOMContentLoaded', function(){

var arr_plan = [
	`<div id="note_div" style="background-image: url(https://html5book.ru/wp-content/uploads/2015/10/html5.png);">
		<h3 class="note_name">
			<a href="lorem_ipsum.html" class="note_a">
				Text: 1Lorem ipsum parabelle
			</a>
		</h3>
	 </div>`,

	`<div id="note_div" style="background-image: url(https://html5book.ru/wp-content/uploads/2015/10/html5.png);">
		<h3 class="note_name">
			<a href="lorem_ipsum.html" class="note_a">
				Text: 2Lorem ipsum parabelle
			</a>
		</h3>
	 </div>`
];


var plana = arr_plan.join(' ');

if (document.getElementById('plan')) { plan.innerHTML = plana; }

})