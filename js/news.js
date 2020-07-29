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
<a name="#2" href="news.html#2">#2</a>
<img src="https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/116261583_129952265447657_1521549068888838068_o.jpg?_nc_cat=100&_nc_sid=730e14&_nc_ohc=gkOU0BrDK6EAX9YWuou&_nc_ht=scontent-waw1-1.xx&oh=b92c1b1f899e6bbc52109de4e783d636&oe=5F4513E4" width="300" tabindex="0"/>
</h3></div>`,	
	
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
