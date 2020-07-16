document.addEventListener('DOMContentLoaded', function(){

/*	
`<a href="note/НОМЕР.html" class="note_a">
<div id="note_div" style="background-image: url(ФОТО);">
<h3 class="note_name">Название</h3></div></a>`,	
*/

var arr_note = [
	
`<a href="note/1.html" class="note_a">
<div id="note_div" style="background-image: url(https://upload.wikimedia.org/wikipedia/commons/e/e5/Mazirov.jpg);">
<h3 class="note_name">Карта: Д. Е. Мазиров</h3></div></a>`,

`<a href="note/2.html" class="note_a">
<div id="note_div" style="background-image: url(https://sun9-18.userapi.com/_apPqsAIOpA0aaaTk7wOGzYMySavKeah4d-AjQ/5Y30-8UVgSE.jpg);">
<h3 class="note_name">Карта: С. Лехаци</h3></div></a>`

	
];


var n = 9;

var myVar1 = arr_note.slice(0, n);

var myVar2 = myVar1.join(' ');

var myVar3 = arr_note.join(' ');

if (document.getElementById('note')) { note.innerHTML = myVar2; }

if (document.getElementById('note_all')) { note_all.innerHTML = myVar3; }

})
