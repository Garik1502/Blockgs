document.addEventListener('DOMContentLoaded', function(){

/*	
`<div id="note_div" style="background-image: url(https://html5book.ru/wp-content/uploads/2015/10/html5.png);">
<h3 class="note_name">
<a href="lorem_ipsum.html" class="note_a">
Text: Lorem ipsum parabelle
</a></h3></div>`,	
*/

var arr_note = [
	
`<div id="note_div" style="background-image: url(https://sun9-67.userapi.com/c855120/v855120386/1f3a3d/sCqdOdRZzfw.jpg);">
<h3 class="note_name">
<a href="note/1.html" class="note_a">
Антисоветские пасхалки в армянских мультфильмах
</a></h3></div>`
	
];


var n = 9;

var myVar1 = arr_note.slice(0, n);

var myVar2 = myVar1.join(' ');

var myVar3 = arr_note.join(' ');

if (document.getElementById('note')) { note.innerHTML = myVar2; }

if (document.getElementById('note_all')) { note_all.innerHTML = myVar3; }

})
