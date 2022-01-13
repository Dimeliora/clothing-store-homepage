import { productsElms } from './products-dom-elements';

productsElms.productsGalleryElm.addEventListener('click', (e) => {
    const productFavBtn = e.target.closest('[data-products-fav]');
    if (productFavBtn) {
        productFavBtn.classList.toggle('gallery__favs-button--active');
    }
});
