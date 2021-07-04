document.addEventListener('DOMContentLoaded', function () {
	const currentCategory = document.querySelector('.category');
	const selectBodyItems = document.querySelectorAll('.select__item');
	const selectBody = document.querySelector('.select__body');
	const currentItem = document.querySelector('.category__current');

	currentCategory.addEventListener('click', function () {
		selectBody.classList.toggle('isActive');
		currentItem.classList.toggle('select-open');

	});

	selectBodyItems.forEach(item => {
		item.addEventListener('click', function () {
			let text = this.innerHTML;
			let currentSelect = this.closest('.category').querySelector('.category__current');
			currentSelect.innerHTML = text;
			activeItem()
		});
	});
	function activeItem() {
		let activeItem = currentItem.childNodes[1].dataset['current'];
		selectBodyItems.forEach(item => {
			if (activeItem == item.childNodes[1].dataset['current']) {
				item.classList.add('isCurrent');
			} else {
				item.classList.remove('isCurrent');
			}
		})
	}
	activeItem()
});