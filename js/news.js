document.addEventListener('DOMContentLoaded', function(){

window.onload = function() {
var arr = [
	
	`<div id="news"><h3>
	<a name="#2" href="#2">#2</a> 
	Коронавирус ещё не успели искоренить, а съёмки новой экранизации "Противостояния" по Стивену Кингу подходят к концу. Вовремя однако...
	</h3></div>`,

	`<div id="news"><h3>
	<a name="#1" href="#1">#1</a> 
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
