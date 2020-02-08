document.addEventListener('DOMContentLoaded', function(){

/*	
`<a href="note/1.html" class="note_a">
<div id="note_div" style="background-image: url(https://sun9-67.userapi.com/c855120/v855120386/1f3a3d/sCqdOdRZzfw.jpg);">
<h3 class="note_name">
Антисоветские пасхалки в армянских мультфильмах
</h3></div></a>`,	
*/

var arr_note = [
	
`<a href="note/1.html" class="note_a">
<div id="note_div" style="background-image: url(https://sun9-67.userapi.com/c855120/v855120386/1f3a3d/sCqdOdRZzfw.jpg);">
<h3 class="note_name">
Антисоветские пасхалки в армянских мультфильмах
</h3></div></a>`	
	
];


var n = 9;

var myVar1 = arr_note.slice(0, n);

var myVar2 = myVar1.join(' ');

var myVar3 = arr_note.join(' ');

if (document.getElementById('note')) { note.innerHTML = myVar2; }

if (document.getElementById('note_all')) { note_all.innerHTML = myVar3; }

})
