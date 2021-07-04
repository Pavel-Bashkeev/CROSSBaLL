function openBodySelect() {
	let openedFlag = false;
	const formatBtnCurrent = document.querySelector('.format-btn__current');
	const formatBtn = document.querySelector('.format-btn');
	const itemSelectFormat = formatBtn.querySelector('.format-btn__items');
	const itemsSelectFormat = itemSelectFormat.querySelectorAll('.format-btn__item');
	formatBtnCurrent.addEventListener('click', () => {
		itemSelectFormat.classList.toggle('select-body__opened');
		openedFlag = !openedFlag;
		if (openedFlag) {
			formatBtnCurrent.setAttribute('aria-expanded', true);
			itemSelectFormat.setAttribute('aria-hidden', false);
			itemSelectFormat.style.maxHeight = itemSelectFormat.scrollHeight + 'px';
		} else {
			formatBtnCurrent.setAttribute('aria-expanded', false);
			itemSelectFormat.setAttribute('aria-hidden', true);
			formatBtn.querySelector('.format-btn__items').style.maxHeight = null;
		}
	});
}
openBodySelect();