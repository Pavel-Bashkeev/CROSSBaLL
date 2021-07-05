const getCartSesson = fetch('../data/dataSesson.json')
	.then(respons => respons.json())
	.then(data => {
		cardSesson(data);
	});

function cardSesson(data) {
	let sessonResult = document.querySelector('.season-result');
	for (let i = 0; i < data.length; i++) {
		let cardItem = `
			<div class="season-result__item">
				<h4 class="season-result__title">${data[i].title}</h4>
				<p class="season-result__count">${data[i].count}</p>
			</div>
		`;
		sessonResult.innerHTML += cardItem;
	}
}