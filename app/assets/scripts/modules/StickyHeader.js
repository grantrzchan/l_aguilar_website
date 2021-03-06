import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {
    constructor() {
        this.lazyImages = $('.lazyload');
        this.siteHeader = $('.site-header');
        this.headerTriggerElement = $('.large-hero__title');
        this.pageSections = $('.page-section');
        this.headerLinks = $('.primary-nav a');
        this.createHeaderWaypoint();
        this.createPageSectionWaypoint();
        this.addSmoothScrolling();
        this.refreshWaypoints();
    }

    refreshWaypoints(){
        //fixes waypoint glitch caused by lazyloading.
        //Waypoint now refreshes after lazyload is triggered
        this.lazyImages.on('load',function(){
            //Refresh all waypoints, trigger refresh in the global Waypoint object
            Waypoint.refreshAll();
        });
    }

    addSmoothScrolling() {
        this.headerLinks.smoothScroll();
    }

    createHeaderWaypoint() {
        var that = this;
        new Waypoint({
            // access first element of large-hero_title, which is the DOM element
            element: this.headerTriggerElement[0],
            handler: function (direction) {
                if (direction == "down") {
                    that.siteHeader.addClass("site-header--dark");
                    that.headerLinks.addClass('when-page-scrolling');
                } else {
                    that.headerLinks.removeClass('when-page-scrolling');
                    that.siteHeader.removeClass("site-header--dark");
                };
            }
        });
    }

    createPageSectionWaypoint() {
        var that = this;
        this.pageSections.each(function () {
            var currentPageSection = this;
            new Waypoint({
                element: currentPageSection,
                handler: function (direction) {
                    if (direction = "down") {
                        var matchingHeaderLink = currentPageSection.getAttribute('data-matching-link');
                        that.headerLinks.removeClass('is-current-link');
                        // that.headerLinks.addClass('when-page-scrolling');
                        $(matchingHeaderLink).addClass('is-current-link');
                    }
                },
                // customize how early or late the waypoint is triggered
                offset: "25%"
            });
            new Waypoint({
                element: currentPageSection,
                handler: function (direction) {
                    if (direction = "up") {
                        var matchingHeaderLink = currentPageSection.getAttribute('data-matching-link');
                        that.headerLinks.removeClass('is-current-link');
                        // that.headerLinks.removeClass('when-page-scrolling');
                        $(matchingHeaderLink).addClass('is-current-link');
                    }
                },
                // customize how early or late the waypoint is triggered
                offset: "-65%"
            });
        });
    }
};
export default StickyHeader;