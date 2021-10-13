export const sideMenuHandler = () => {
	const sidebar = document.querySelector(".sidebar");
	const sidebarButton = document.querySelector(".sidebar-button");
	const sidebarCloseButton = document.querySelector(".sidebar__close-button");

	if (sidebar && sidebarButton && sidebarCloseButton) {
		sidebarButton.addEventListener("click", () => {
			sidebar.classList.toggle("sidebar--active");
		});

		document.addEventListener("click", (e) => {
			const isSidebarClicked = e.composedPath().includes(sidebar);
			const issidebarButtonClicked = e.composedPath().includes(sidebarButton);

			if (!isSidebarClicked && !issidebarButtonClicked) {
				sidebar.classList.remove("sidebar--active");
			}
		});

		sidebarCloseButton.addEventListener("click", () => {
			sidebar.classList.remove("sidebar--active");
		});
	}
};
