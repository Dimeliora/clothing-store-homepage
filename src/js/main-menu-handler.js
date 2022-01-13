import { mainMenuElms } from './dom-elements';

const showLinkUnderline = ({ target }) => {
    if (target.closest('[data-main-menu-link]')) {
        const left = `${target.offsetLeft}px`;
        const width = `${target.clientWidth}px`;

        mainMenuElms.mainMenuElm.style.setProperty('--left-offset', left);
        mainMenuElms.mainMenuElm.style.setProperty('--item-width', width);
    }
};

const hideLinkUnderline = () => {
    mainMenuElms.mainMenuElm.style.setProperty('--item-width', '0px');
};

const mainMenuHandler = () => {
    mainMenuElms.mainMenuNavbarElm.classList.toggle('header__navbar--active');
    mainMenuElms.mainMenuButtonElm.classList.toggle(
        'header__menu-button--active'
    );

    document.body.classList.toggle('scroll-prevent');
};

mainMenuElms.mainMenuElm.addEventListener('mouseover', showLinkUnderline);

mainMenuElms.mainMenuElm.addEventListener('mouseleave', hideLinkUnderline);

[...mainMenuElms.mainMenuElm.children].forEach((child) => {
    child.addEventListener('focus', showLinkUnderline);
    child.addEventListener('blur', hideLinkUnderline);
});

mainMenuElms.mainMenuButtonElm.addEventListener('click', mainMenuHandler);
