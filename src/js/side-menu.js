export const sideMenuHandler = () => {
	const sidebar = document.querySelector(".sidebar");
	const sidebarButton = document.querySelector(".sidebar-button");
	const sidebarCloseButton = document.querySelector(".sidebar__close-button");

	if (sidebar && sidebarButton && sidebarCloseButton) {
		const closeSidebarHandler = () => {
			sidebar.classList.remove("sidebar--active");
			sidebarButton.classList.remove("sidebar-button--active");
		};

		sidebarButton.addEventListener("click", () => {
			sidebar.classList.toggle("sidebar--active");
			sidebarButton.classList.toggle("sidebar-button--active");
		});

		document.addEventListener("click", (e) => {
			const isSidebarClicked = e.composedPath().includes(sidebar);
			const issidebarButtonClicked = e.composedPath().includes(sidebarButton);

			if (!isSidebarClicked && !issidebarButtonClicked) {
				closeSidebarHandler();
			}
		});

		sidebarCloseButton.addEventListener("click", closeSidebarHandler);
	}
};
