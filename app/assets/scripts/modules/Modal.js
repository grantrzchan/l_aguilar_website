import $ from 'jquery';

class Modal {
    constructor() {
        this.openModalButton = $('.open-modal');
        this.modal = $('.modal');
        this.closeModalButton = $('.modal__close');
        this.events();
    };

    events() {
        //clicking the open modal button
        this.openModalButton.click(this.openModal.bind(this));
        //clicking the x close modal button
        this.closeModalButton.click(this.closeModal.bind(this));
        //keystroke down for any key
        $(document).keyup(this.keyPressHandler.bind(this));

    }
    keyPressHandler(event) {
        //keystroke down for escape key
        if(event.keyCode == 27){
            this.closeModal();
        }
    }
    openModal() {
        this.modal.addClass('modal--is-visible');
        //prevent the link from returning to the top of the page. Eliminates href="#" default behavior
        return false;
    }
    closeModal() {
        this.modal.removeClass('modal--is-visible');
    }
}

export default Modal;