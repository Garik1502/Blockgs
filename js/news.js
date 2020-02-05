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
<a name="#10" href="news.html#10">#10</a>
И разделённый на две части, мир и поныне так живёт: удачливый фортуну славит, а неудачливый — клянёт.
<br>
© Хуана де ла Крус

</h3></div>`,
	
`<div id="news"><h3>
<a name="#9" href="news.html#9">#9</a>
Бог умер в воскресенье, на седьмой день, когда соотворил Человека!<br>
Это мы его убили! Не я, не ты, а МЫ! Люди!<br>
К слову о боге, он умирал под песню Paolo Conte - L'orchestrina<br>
<iframe width="300" height="315" src="https://www.youtube.com/embed/UEzva4K_HTo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</h3></div>`,
	
	`<div id="news"><h3>
<a name="#8" href="news.html#8">#8</a> 
Чёрт, это получаеться что Superman - Übermensch по немецки?
</h3></div>`,
	
	`<div id="news"><h3>
<a name="#7" href="news.html#7">#7</a> 
Как актуально: <br> <iframe width="300" height="315" src="https://www.youtube.com/embed/Sq75fCNYHtY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</h3></div>`,
	
	`<div id="news"><h3>
<a name="#6" href="news.html#6">#6</a> 
На Відміну Від - Я боюся Чебурашку<br><iframe width="300" height="315" src="https://www.youtube.com/embed/2n0PJqHVGcQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</h3></div>`,
	
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
