export const mainMenuHandler = () => {
	const mainNavBar = document.querySelector(".header__navbar");
	const mainMenu = document.querySelector(".header__menu");
	const mainMenuButton = document.querySelector(".header__menu-button");
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

		if (mainNavBar && mainMenuButton) {
			mainMenuButton.addEventListener("click", () => {
				mainNavBar.classList.toggle("header__navbar--active");
				mainMenuButton.classList.toggle("header__menu-button--active");
				document.body.classList.toggle("scroll-prevent");
			});
		}
	}
};
