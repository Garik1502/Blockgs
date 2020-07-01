document.addEventListener('DOMContentLoaded', function(){

window.onload = function() {	
/*

`<div id="news"><h3>
<a name="#N" href="news.html#N">#N</a>
...
</h3></div>`,

*/	
var arr = [
	
`<div id="news"><h3>
<a name="#1" href="news.html#1">#1</a><br>
—Вечером свободны вы?<br>
—Нет<br>
—А завтра днём?<br>
—Нет<br>
—Послезавтра?<br>
—И послезавтра нет, <br>
&emsp;и после послезавтра нет, <br>
&emsp;не через неделю, <br>
&emsp;не через дней семь, <br>
&emsp;и не через две недели <br>
&emsp;и не через три,<br>
&emsp;через месяц тоже нет,<br>
&emsp;через полтора никак, <br>
&emsp;спустя год я не смогу, <br>
&emsp;спустя полтора никак, <br>
&emsp;и не через года два, <br>
&emsp;и не после лет пяти, <br>
&emsp;и не после десяти, <br>
&emsp;не могу я, не могу, <br>
&emsp;быть свободным вне раю...<br>
</h3></div>`
];

// выводим в другом массиве
var copy = arr.slice();

var copy_reversed = arr.slice();
var reversed = copy_reversed.reverse();


// выводим на экран скопированный массив

if (document.getElementById('news_div')) { for(e of copy_reversed) news_div.innerHTML = e; }

if (document.getElementById('news_div_all')) { for(e of copy) news_div_all.innerHTML += e; }

}

})
