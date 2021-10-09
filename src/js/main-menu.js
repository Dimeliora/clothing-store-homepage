export const mainMenuHandler = () => {
	const mainMenu = document.querySelector(".header__menu");
	const mainMenuLinks = document.querySelectorAll(".header__link");

	if (mainMenu) {
		const showLinkUnderline = ({ target }) => {
			if (target.closest(".header__link")) {
				const left = `${target.offsetLeft}px`;
				const width = `${target.clientWidth}px`;

				mainMenu.style.setProperty("--left-offset", left);
				mainMenu.style.setProperty("--item-width", width);
			}
		};

		const hideLinkUnderline = () => {
			mainMenu.style.setProperty("--item-width", "0px");
		};

		mainMenu.addEventListener("mouseover", showLinkUnderline);
		mainMenu.addEventListener("mouseleave", hideLinkUnderline);

		mainMenuLinks.forEach((link) => {
			link.addEventListener("focus", showLinkUnderline);
			link.addEventListener("blur", hideLinkUnderline);
		});
	}
};
