const elMenuBtn = document.querySelectorAll('.menu__link');
const elTop = document.querySelectorAll('.fax__top');
console.log(elTop);

elMenuBtn.forEach(item => {
	item.addEventListener('click', e => {
		item.classList.toggle('.menu__link-active');
	});
});

// Eltop
elTop.forEach(item => {
	item.addEventListener('click', e => {
		console.log(item.nextElementSibling);
		item.nextElementSibling.classList.toggle('visable');
	});
});
