import $ from 'jquery';

class MobileMenu {
    constructor() {
        this.menuIcon = $(".site-header__menu-icon");
        this.events();
        events() {
            this.menuIcon.click(this.toggleTheMenu);
            this.menuContent = $(".siteheader__menu-content");
        };

        toggleTheMenu() {
            console.log("hooray");
        };
    };
};
export default MobileMenu;