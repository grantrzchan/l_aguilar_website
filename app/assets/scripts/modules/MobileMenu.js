import $ from 'jquery';

class MobileMenu {
    constructor() {
        this.menuIcon = $(".site-header__menu-icon");
        this.menuContent = $(".site-header__menu-content");
        this.events();
    };
        events() {
            //Prevents this from referring to the click event. Use bind().
            this.menuIcon.click(this.toggleTheMenu.bind(this));
        };

        toggleTheMenu() {
            // console.log("hooray");
            this.menuContent.toggleClass("site-header__menu-content--is-visible");
        }; 
};
export default MobileMenu;