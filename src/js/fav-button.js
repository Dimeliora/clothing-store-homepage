export const favButtonsHandler = () => {
	const favButtons = document.querySelectorAll(".gallery__favs-button");

	favButtons.forEach((btn) => {
		btn.addEventListener("click", (e) => {
			e.preventDefault();

			btn.classList.toggle("gallery__favs-button--active");
		});
	});
};
