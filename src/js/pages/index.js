import { event } from 'jquery';

const index = () => {
	const menuToggle = document.querySelector('.btn__menu');

	menuToggle.addEventListener('click', () => {
		const navbar = document.querySelector('.navbar');
		navbar.classList.toggle('active');
		menuToggle.classList.toggle('toggle');

		if (navbar.classList.contains('active')) {
			menuToggle.textContent = 'Close';
		} else {
			menuToggle.textContent = 'Menu';
		}
	});

	document.addEventListener('keydown', (event) => {
		if (event.code === 'Escape') {
			const navbar = document.querySelector('.navbar'); // Змініть '.showcase' на клас вашого модального вікна
			if (navbar.classList.contains('active')) {
				navbar.classList.remove('active');
				// Якщо є необхідність, змініть текст кнопки назад на 'Menu' або інший стандартний текст
				const menuButton = document.querySelector('.btn__menu');
				if (menuButton) {
					menuButton.textContent = 'Menu';
				}
			}
		}
	});
};

export default index;
