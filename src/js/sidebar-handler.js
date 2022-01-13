import { sidebarElms } from './dom-elements';

const sidebarHandler = () => {
    sidebarElms.sidebarElm.classList.toggle('sidebar--active');
    sidebarElms.sidebarButtonElm.classList.toggle('sidebar-button--active');
};

const closeSidebarHandler = () => {
    sidebarElms.sidebarElm.classList.remove('sidebar--active');
    sidebarElms.sidebarButtonElm.classList.remove('sidebar-button--active');
};

const outsideSidebarClickHandler = (e) => {
    const sidebarElements = [
        sidebarElms.sidebarElm,
        sidebarElms.sidebarButtonElm,
    ];
    const eventPath = e.composedPath();

    const isClickedOutside = sidebarElements.every(
        (elm) => !eventPath.includes(elm)
    );
    if (isClickedOutside) {
        closeSidebarHandler();
    }
};

sidebarElms.sidebarButtonElm.addEventListener('click', sidebarHandler);

sidebarElms.sidebarCloseElm.addEventListener('click', closeSidebarHandler);

document.addEventListener('click', outsideSidebarClickHandler);
