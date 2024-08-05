const elMenuBtn = document.querySelectorAll('.menu__link');
elMenuBtn.forEach(item => {
	item.addEventListener('click', e => {
		e.target.classList.togle('.menu__link-active');
	});
});
