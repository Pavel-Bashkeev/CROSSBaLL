document.addEventListener('DOMContentLoaded', function () {
	const selectMenuLink = document.querySelector('.select-menu__link');
	const secondMenu = document.querySelector('.menu-second');

	selectMenuLink.addEventListener('click', () => {
		secondMenu.classList.toggle('second-menu__opened');
		if (secondMenu.classList.contains('second-menu__opened')) {
			selectMenuLink.setAttribute('aria-expanded', true);
			secondMenu.setAttribute('aria-hidden', false);
			secondMenu.style.maxHeight = secondMenu.scrollHeight + 'px';
		} else {
			selectMenuLink.setAttribute('aria-expanded', false);
			secondMenu.setAttribute('aria-hidden', true);
			secondMenu.style.maxHeight = null;
		}
	});
})