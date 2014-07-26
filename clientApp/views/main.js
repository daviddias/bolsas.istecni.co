var View = require('ampersand-view');
var ViewSwitcher = require('ampersand-view-switcher');
var _ = require('underscore');
var templates = require('../templates');

module.exports = View.extend({
    template: templates.body,
    initialize: function() {
        app.router.history.on('route', this.updateActiveNav, this);
    },
    events: {
        'click a[href]': 'handleLinkClick'
    },
    render: function() {

        this.renderWithTemplate();

        this.pageSwitcher = new ViewSwitcher(this.getByRole('page-container'), {
            show: function(newView, oldView) {
                document.title = _.result(newView.pageTitle) || "bolsas.tecni.co";
                document.scrollTop = 0;

                newView.el.classList.add('active');

                app.currentPage = newView;
            }
        });

        return this;
    },

    setPage: function(view) {
        this.pageSwitcher.set(view);
        this.updateActiveNav();
    },

    handleLinkClick: function(e) {
        var t = $(e.target);
        var aEl = t.is('a') ? t[0] : t.closest('a')[0];
        var local = window.location.host === aEl.host;
        var path = aEl.pathname.slice(1);

        if(local) {
            e.preventDefault();
            app.navigate(path);
        }
    },

    updateActiveNav: function() {
        var pathname = window.location.pathname;
        $('.nav-control a').each(function() {
            var navArray = $(this).attr('href');

            if(pathname === navArray) {
                $(this).addClass('active');
            } else {
                $(this).removeClass('active');
            }
        });
    }

});
