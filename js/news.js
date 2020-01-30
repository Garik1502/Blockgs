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
<a name="#5" href="news.html#5">#5</a> 
Моя жизнь делиться на два момента: До того как я узнал что смеситель изобрёл армянин, и после...
</h3></div>`,

`<div id="news"><h3>
<a name="#4" href="news.html#4">#4</a> 
Моя биологичка как чёртова мадам Малышева... Бог с ней...	
</h3></div>`,

	`<div id="news"><h3>
	<a name="#3" href="news.html#3">#3</a> 
	А вы замечали как армянское общество атомизированно?
 Нет, ну правда, даже я иногда избегаю встреч с армянами,
 хотя это наверное связано с тем что у меня не шибко то и много
вожмозностей на такие встречи. Между армянами идёт какая-то странная 
конфронтация.
	</h3></div>`,

	`<div id="news"><h3>
	<a name="#2" href="news.html#2">#2</a> 
	Коронавирус ещё не успели искоренить, а съёмки новой экранизации "Противостояния" по Стивену Кингу подходят к концу. Вовремя однако...
	</h3></div>`,

	`<div id="news"><h3>
	<a name="#1" href="news.html#1">#1</a> 
	Звенит январская вьюга и ливни хлещут упруго <br>
	И звезды мчатся по кругу и шумят города <br>
	Не видят люди друг друга, проходят мимо друг друга <br>
	Теряют люди друг друга, а потом не найдут никогда
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
