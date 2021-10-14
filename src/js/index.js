import { mainMenuHandler } from "./main-menu";
import { sideMenuHandler } from "./side-menu";
import { favButtonsHandler } from "./fav-button";

document.addEventListener("DOMContentLoaded", () => {
	mainMenuHandler();

	sideMenuHandler();

	favButtonsHandler();
});
