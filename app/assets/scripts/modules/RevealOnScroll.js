import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
class RevealOnScroll {
    constructor(element,offset) {
        //order matters. can't execute createWaypoints method without define it's parameters first
        this.itemsToReveal = element;
        this.offsetPercentage = offset;
        this.hideInitially();
        this.createWaypoints();
    }

    hideInitially() {
        this.itemsToReveal.addClass("reveal-item");
    }

    createWaypoints() {
        // "that" points to the constructor object
        var that = this;
        this.itemsToReveal.each(function () {
            var currentItem = this;
            new Waypoint({
                element: currentItem,
                handler: function () {
                    $(currentItem).addClass("reveal-item--is-visible");
                },
                offset: that.offsetPercentage
            });
        });
    }
}

export default RevealOnScroll