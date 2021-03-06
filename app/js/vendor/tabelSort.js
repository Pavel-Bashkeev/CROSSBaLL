// let myArrayTable = [
// 	{ 'nameSesson': 'Сезон 2021/2020', 'countGame': '5', 'gol': '9', 'pas': '2', 'golPas': '1', 'rating': '90' },
// 	{ 'nameSesson': 'Сезон 2020/2019', 'countGame': '4', 'gol': '8', 'pas': '5', 'golPas': '2', 'rating': '97' },
// 	{ 'nameSesson': 'Сезон 2019/2018', 'countGame': '3', 'gol': '7', 'pas': '3', 'golPas': '3', 'rating': '30' },
// 	{ 'nameSesson': 'Сезон 2018/2017', 'countGame': '2', 'gol': '6', 'pas': '5', 'golPas': '4', 'rating': '50' },
// 	{ 'nameSesson': 'Сезон 2017/2016', 'countGame': '5', 'gol': '5', 'pas': '4', 'golPas': '5', 'rating': '10' }
// ]
const nameTHead = document.querySelectorAll('.table-head__sort');
const tableHead = document.querySelector('.table-head');

let myArrayTable = fetch('https://pavel-bashkeev.github.io/CROSSBaLL/data/dataTable.json')
	.then(resp => resp.json())
	.then(data => {
		let dataResponse = data;
		getTableValue(dataResponse);
		nameTHead.forEach(item => {
			item.addEventListener('click', function () {

				activeTHead(nameTHead, item, 'table-head__sort-down');

				let columnName = this.getAttribute('data-column');
				let orderColumn = this.getAttribute('data-order');

				if (orderColumn == 'descr') {
					item.setAttribute('data-order', 'asc');
					dataResponse = dataResponse.sort((a, b) => a[columnName] > b[columnName] ? 1 : -1);
					getTableValue(dataResponse);
				} else {
					item.setAttribute('data-order', 'descr');
					dataResponse = dataResponse.sort((a, b) => a[columnName] < b[columnName] ? 1 : -1);
					getTableValue(dataResponse);
					item.classList.remove('table-head__sort-down');
				}



			})
		});
	});
function getTableValue(data) {
	let tbody = document.querySelector('.table-body');
	tbody.innerHTML = '';
	for (let i = 0; i < data.length; i++) {
		let row = `
		<tr class='table-body__row'>
			<td class='table-body__item'>${data[i].nameSesson}</td>
			<td class='table-body__item'>${data[i].countGame}</td>
			<td class='table-body__item'>${data[i].gol}</td>
			<td class='table-body__item'>${data[i].pas}</td>
			<td class='table-body__item'>${data[i].golPas}</td>
			<td class='table-body__item'>${data[i].rating}</td>
		</tr>
		`;
		tbody.innerHTML += row;
	}
}
function activeTHead(items, item, className) {
	for (let i = 0; i < items.length; i++) {
		if (items[i].classList.contains(className)) {
			items[i].classList.remove(className);
		} else {
			item.classList.add(className);
		}
	}
}