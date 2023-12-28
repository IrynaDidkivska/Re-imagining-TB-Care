import { event } from 'jquery';

const index = () => {
	const menuBtn = document.getElementById('menuBtn');
	const navbarMenu = document.getElementById('navbarMenu');
	const closeBtn = document.getElementById('closeBtn');

	menuBtn.onclick = (event) => {
		navbarMenu.style.display = 'block';
	};
	closeBtn.onclick = (event) => {
		navbarMenu.style.display = 'none';
	};
};

export default index;
